import { expectType, expectError } from "tsd";
import bulky from "@bulky/core";
import Dashboard from "..";

{
  const bulky = new bulky();
  bulky.use(Dashboard, {
    target: "body",
  });

  const plugin = bulky.getPlugin<Dashboard>("Dashboard") ?? ({} as never);
  plugin.openModal();
  expectType<boolean>(plugin.isModalOpen());
  plugin.closeModal();
}

{
  const bulky = new bulky();
  bulky.use(Dashboard, {
    width: "100%",
    height: 700,
    metaFields: [
      { id: "caption", name: "Caption" },
      {
        id: "license",
        name: "License",
        placeholder: "Creative Commons, Apache 2.0, ...",
      },
      {
        id: "public",
        name: "Public",
        render({ value, onChange }, h) {
          expectType<string>(value);
          expectType<(val: string) => void>(onChange);
          // `h` should be the Preact `h`
          expectError(h([], "error"));
          /* Currently `h` typings are limited because of a JSX type conflict between React and Preact.
          return h('input', {
            type: 'checkbox',
            checked: value === 'yes',
            onChange: (event) => {
              expectType<Event>(event)
              onChange((event.target as HTMLInputElement).checked ? 'yes' : 'no')
            }
          })
          */
        },
      },
    ],
    onDragOver: (event) => event.clientX,
    onDrop: (event) => event.clientX,
    onDragLeave: (event) => event.clientX,
  });

  bulky.on("dashboard:file-edit-start", (file) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fileName = file?.name;
  });
  bulky.on("dashboard:show-panel", (id) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const pluginId = id;
  });
}

{
  const bulky = new bulky();
  bulky.use(Dashboard, {
    locale: {
      strings: {
        // Dashboard string
        addMoreFiles: "yaddayadda",
        // StatusBar string
        uploading: "^^^^",
      },
    },
  });
  expectError(
    bulky.use(Dashboard, {
      locale: {
        strings: {
          somethingThatDoesNotExist: "wrong",
        },
      },
    })
  );
  const wrongType = 1234;
  expectError(
    bulky.use(Dashboard, {
      locale: {
        strings: {
          addMoreFiles: wrongType,
        },
      },
    })
  );
}
{
  const bulky = new bulky();
  expectError(bulky.use(Dashboard, { height: {} }));
}
