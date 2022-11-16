import {
  afterEach,
  beforeEach,
  jest,
  describe,
  it,
  expect,
} from "@jest/globals";
import bulkySocket from "./Socket.js";

describe("Socket", () => {
  let webSocketConstructorSpy;
  let webSocketCloseSpy;
  let webSocketSendSpy;

  beforeEach(() => {
    webSocketConstructorSpy = jest.fn();
    webSocketCloseSpy = jest.fn();
    webSocketSendSpy = jest.fn();

    globalThis.WebSocket = class WebSocket {
      constructor(target) {
        webSocketConstructorSpy(target);
      }

      // eslint-disable-next-line class-methods-use-this
      close(args) {
        webSocketCloseSpy(args);
      }

      // eslint-disable-next-line class-methods-use-this
      send(json) {
        webSocketSendSpy(json);
      }

      triggerOpen() {
        this.onopen();
      }

      triggerClose() {
        this.onclose();
      }
    };
  });
  afterEach(() => {
    globalThis.WebSocket = undefined;
  });

  it("should expose a class", () => {
    expect(bulkySocket.name).toEqual("bulkySocket");
    expect(
      new bulkySocket({
        target: "foo",
      }) instanceof bulkySocket
    );
  });

  it("should setup a new WebSocket", () => {
    new bulkySocket({ target: "foo" }); // eslint-disable-line no-new
    expect(webSocketConstructorSpy.mock.calls[0][0]).toEqual("foo");
  });

  it("should send a message via the websocket if the connection is open", () => {
    const bulkySocket = new bulkySocket({ target: "foo" });
    const webSocketInstance =
      bulkySocket[Symbol.for("bulky test: getSocket")]();
    webSocketInstance.triggerOpen();

    bulkySocket.send("bar", "boo");
    expect(webSocketSendSpy.mock.calls.length).toEqual(1);
    expect(webSocketSendSpy.mock.calls[0]).toEqual([
      JSON.stringify({ action: "bar", payload: "boo" }),
    ]);
  });

  it("should queue the message for the websocket if the connection is not open", () => {
    const bulkySocket = new bulkySocket({ target: "foo" });

    bulkySocket.send("bar", "boo");
    expect(bulkySocket[Symbol.for("bulky test: getQueued")]()).toEqual([
      { action: "bar", payload: "boo" },
    ]);
    expect(webSocketSendSpy.mock.calls.length).toEqual(0);
  });

  it("should queue any messages for the websocket if the connection is not open, then send them when the connection is open", () => {
    const bulkySocket = new bulkySocket({ target: "foo" });
    const webSocketInstance =
      bulkySocket[Symbol.for("bulky test: getSocket")]();

    bulkySocket.send("bar", "boo");
    bulkySocket.send("moo", "baa");
    expect(bulkySocket[Symbol.for("bulky test: getQueued")]()).toEqual([
      { action: "bar", payload: "boo" },
      { action: "moo", payload: "baa" },
    ]);
    expect(webSocketSendSpy.mock.calls.length).toEqual(0);

    webSocketInstance.triggerOpen();

    expect(bulkySocket[Symbol.for("bulky test: getQueued")]()).toEqual([]);
    expect(webSocketSendSpy.mock.calls.length).toEqual(2);
    expect(webSocketSendSpy.mock.calls[0]).toEqual([
      JSON.stringify({ action: "bar", payload: "boo" }),
    ]);
    expect(webSocketSendSpy.mock.calls[1]).toEqual([
      JSON.stringify({ action: "moo", payload: "baa" }),
    ]);
  });

  it("should start queuing any messages when the websocket connection is closed", () => {
    const bulkySocket = new bulkySocket({ target: "foo" });
    const webSocketInstance =
      bulkySocket[Symbol.for("bulky test: getSocket")]();
    webSocketInstance.triggerOpen();
    bulkySocket.send("bar", "boo");
    expect(bulkySocket[Symbol.for("bulky test: getQueued")]()).toEqual([]);

    webSocketInstance.triggerClose();
    bulkySocket.send("bar", "boo");
    expect(bulkySocket[Symbol.for("bulky test: getQueued")]()).toEqual([
      { action: "bar", payload: "boo" },
    ]);
  });

  it("should close the websocket when it is force closed", () => {
    const bulkySocket = new bulkySocket({ target: "foo" });
    const webSocketInstance =
      bulkySocket[Symbol.for("bulky test: getSocket")]();
    webSocketInstance.triggerOpen();

    bulkySocket.close();
    expect(webSocketCloseSpy.mock.calls.length).toEqual(1);
  });

  it("should be able to subscribe to messages received on the websocket", () => {
    const bulkySocket = new bulkySocket({ target: "foo" });
    const webSocketInstance =
      bulkySocket[Symbol.for("bulky test: getSocket")]();

    const emitterListenerMock = jest.fn();
    bulkySocket.on("hi", emitterListenerMock);

    webSocketInstance.triggerOpen();
    webSocketInstance.onmessage({
      data: JSON.stringify({ action: "hi", payload: "ho" }),
    });
    expect(emitterListenerMock.mock.calls).toEqual([
      ["ho", undefined, undefined, undefined, undefined, undefined],
    ]);
  });

  it("should be able to emit messages and subscribe to them", () => {
    const bulkySocket = new bulkySocket({ target: "foo" });

    const emitterListenerMock = jest.fn();
    bulkySocket.on("hi", emitterListenerMock);

    bulkySocket.emit("hi", "ho");
    bulkySocket.emit("hi", "ho");
    bulkySocket.emit("hi", "off to work we go");

    expect(emitterListenerMock.mock.calls).toEqual([
      ["ho", undefined, undefined, undefined, undefined, undefined],
      ["ho", undefined, undefined, undefined, undefined, undefined],
      [
        "off to work we go",
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    ]);
  });

  it("should be able to subscribe to the first event for a particular action", () => {
    const bulkySocket = new bulkySocket({ target: "foo" });

    const emitterListenerMock = jest.fn();
    bulkySocket.once("hi", emitterListenerMock);

    bulkySocket.emit("hi", "ho");
    bulkySocket.emit("hi", "ho");
    bulkySocket.emit("hi", "off to work we go");

    expect(emitterListenerMock.mock.calls.length).toEqual(1);
    expect(emitterListenerMock.mock.calls).toEqual([
      ["ho", undefined, undefined, undefined, undefined, undefined],
    ]);
  });
});
