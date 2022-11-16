declare module "@bulky/utils/lib/Translator" {
  namespace Translator {
    export interface Locale {
      strings?: {
        [key: string]: string | { [plural: number]: string };
      };
      pluralize?: (n: number) => number;
    }
  }

  class Translator {
    constructor(opts: Translator.Locale | Translator.Locale[]);

    translate(key: string, options: Record<string, unknown>): string;

    translateArray(key: string, options: Record<string, unknown>): any[];
  }

  export default Translator;
}

declare module "@bulky/utils/lib/EventTracker" {
  namespace EventTracker {
    export type EventHandler = (...args: any[]) => void;
    export interface Emitter {
      on: (event: string, handler: EventHandler) => void;
      off: (event: string, handler: EventHandler) => void;
    }
  }

  class EventTracker {
    constructor(emitter: EventTracker.Emitter);

    on(event: string, handler: EventTracker.EventHandler): void;

    remove(): void;
  }

  export default EventTracker;
}

declare module "@bulky/utils/lib/ProgressTimeout" {
  class ProgressTimeout {
    constructor(timeout: number, timeoutHandler: () => void);

    progress(): void;

    done(): void;
  }
  export default ProgressTimeout;
}

declare module "@bulky/utils/lib/RateLimitedQueue" {
  namespace RateLimitedQueue {
    export type AbortFunction = () => void;
    export interface AbortablePromise<T> extends Promise<T> {
      abort(): void;
      abortOn(signal: AbortSignal): this;
    }
    export type QueueEntry = {
      abort: () => void;
      done: () => void;
    };
    export type QueueOptions = {
      priority?: number;
    };
  }

  export class RateLimitedQueue {
    constructor(limit: number);

    readonly isPaused: boolean;

    run(
      fn: () => RateLimitedQueue.AbortFunction,
      queueOptions?: RateLimitedQueue.QueueOptions
    ): RateLimitedQueue.QueueEntry;

    rateLimit(duration: number): void;

    pause(duration?: number): void;

    resume(): void;

    wrapPromiseFunction(
      fn: () => (...args: any[]) => Promise<any>,
      queueOptions?: RateLimitedQueue.QueueOptions
    ): (...args: any[]) => RateLimitedQueue.AbortablePromise<any>;
  }

  export const internalRateLimitedQueue: symbol;
}

declare module "@bulky/utils/lib/canvasToBlob" {
  function canvasToBlob(
    canvas: HTMLCanvasElement,
    type: string,
    quality?: number
  ): Promise<Blob>;
  export default canvasToBlob;
}

declare module "@bulky/utils/lib/dataURItoBlob" {
  function dataURItoBlob(
    dataURI: string,
    opts: { mimeType?: string; name?: string }
  ): Blob;
  export default dataURItoBlob;
}

declare module "@bulky/utils/lib/dataURItoFile" {
  function dataURItoFile(
    dataURI: string,
    opts: { mimeType?: string; name?: string }
  ): File;
  export default dataURItoFile;
}

declare module "@bulky/utils/lib/emitSocketProgress" {
  import type { bulkyFile } from "@bulky/utils";

  interface ProgressData {
    progress: number;
    bytesUploaded: number;
    bytesTotal: number;
  }

  function emitSocketProgress(
    uploader: unknown,
    progressData: ProgressData,
    file: bulkyFile
  ): void;
  export default emitSocketProgress;
}

declare module "@bulky/utils/lib/findAllDOMElements" {
  function findAllDOMElements(element: string | HTMLElement): HTMLElement[];
  export default findAllDOMElements;
}

declare module "@bulky/utils/lib/findDOMElement" {
  function findDOMElement(element: string | HTMLElement): HTMLElement | null;
  export default findDOMElement;
}

declare module "@bulky/utils/lib/generateFileID" {
  import type { bulkyFile } from "@bulky/utils";

  function generateFileID(file: bulkyFile): string;
  export default generateFileID;
}

declare module "@bulky/utils/lib/getBytesRemaining" {
  function getBytesRemaining(progress: {
    bytesTotal: number;
    bytesUploaded: number;
  }): number;
  export default getBytesRemaining;
}

declare module "@bulky/utils/lib/getETA" {
  function getETA(progress: unknown): number;
  export default getETA;
}

declare module "@bulky/utils/lib/getFileNameAndExtension" {
  function getFileNameAndExtension(filename: string): {
    name: string;
    extension: string | undefined;
  };
  export default getFileNameAndExtension;
}

declare module "@bulky/utils/lib/getFileType" {
  import type { bulkyFile } from "@bulky/utils";

  function getFileType(file: bulkyFile): string;
  export default getFileType;
}

declare module "@bulky/utils/lib/getFileTypeExtension" {
  function getFileTypeExtension(mime: string): string;
  export default getFileTypeExtension;
}

declare module "@bulky/utils/lib/getSocketHost" {
  function getSocketHost(url: string): string;
  export default getSocketHost;
}

declare module "@bulky/utils/lib/getSpeed" {
  function getSpeed(progress: {
    bytesTotal: number;
    bytesUploaded: number;
  }): number;
  export default getSpeed;
}

declare module "@bulky/utils/lib/getTimeStamp" {
  function getTimeStamp(): string;
  export default getTimeStamp;
}

declare module "@bulky/utils/lib/isDOMElement" {
  function isDOMElement(element: any): boolean;
  export default isDOMElement;
}

declare module "@bulky/utils/lib/isObjectURL" {
  function isObjectURL(url: string): boolean;
  export default isObjectURL;
}

declare module "@bulky/utils/lib/isDragDropSupported" {
  function isDragDropSupported(): boolean;
  export default isDragDropSupported;
}

declare module "@bulky/utils/lib/isPreviewSupported" {
  function isPreviewSupported(mime: string): boolean;
  export default isPreviewSupported;
}

declare module "@bulky/utils/lib/isTouchDevice" {
  function isTouchDevice(): boolean;
  export default isTouchDevice;
}

declare module "@bulky/utils/lib/prettyETA" {
  function prettyETA(seconds: number): string;
  export default prettyETA;
}

declare module "@bulky/utils/lib/secondsToTime" {
  function secondsToTime(seconds: number): string;
  export default secondsToTime;
}

declare module "@bulky/utils/lib/settle" {
  function settle<T>(
    promises: Promise<T>[]
  ): Promise<{ successful: T[]; failed: any[] }>;
  export default settle;
}

declare module "@bulky/utils/lib/toArray" {
  function toArray(list: any): any[];
  export default toArray;
}

declare module "@bulky/utils/lib/AbortController" {
  import type { ErrorOptions } from "@bulky/utils/lib/ErrorWithCause";

  export const AbortController: typeof globalThis.AbortController;
  export const AbortSignal: typeof globalThis.AbortSignal;
  export function createAbortError(
    message?: string,
    options?: ErrorOptions
  ): DOMException;
}

declare module "@bulky/utils/lib/getDroppedFiles" {
  function getDroppedFiles(
    dataTransfer: DataTransfer,
    options?: Record<string, unknown>
  ): Promise<File[]>;
  export default getDroppedFiles;
}

declare module "@bulky/utils/lib/getTextDirection" {
  function getTextDirection(element: Node): string | undefined;
  export default getTextDirection;
}

declare module "@bulky/utils/lib/isNetworkError" {
  export default function isNetworkError(xhr: any): boolean;
}

declare module "@bulky/utils/lib/NetworkError" {
  class NetworkError extends Error {
    readonly cause: any;

    readonly isNetworkError: true;

    readonly request?: XMLHttpRequest;

    constructor(error: any, xhr?: XMLHttpRequest);
  }

  export default NetworkError;
}

declare module "@bulky/utils/lib/FOCUSABLE_ELEMENTS" {
  const exports: string[];
  export default exports;
}

declare module "@bulky/utils/lib/truncateString" {
  export default function truncateString(
    string: string,
    maxLength: number
  ): string;
}

declare module "@bulky/utils/lib/remoteFileObjToLocal" {
  export default function remoteFileObjToLocal(
    file: object
  ): Record<string, unknown>;
}

declare module "@bulky/utils/lib/fetchWithNetworkError" {
  export default function fetchWithNetworkError(
    ...options: unknown[]
  ): Promise<Response>;
}

declare module "@bulky/utils/lib/ErrorWithCause" {
  interface ErrorOptions {
    cause?: unknown;
  }

  export default class ErrorWithCause extends Error {
    cause: any;

    isNetworkError?: true;

    constructor(message: string, options?: ErrorOptions);
  }
}

declare module "@bulky/utils/lib/delay" {
  export default function delay(
    ms: number,
    opts?: { signal: AbortSignal }
  ): Promise<void>;
}

declare module "@bulky/utils/lib/hasProperty" {
  export default function has(object: any, key: string): boolean;
}

declare module "@bulky/utils/lib/mimeTypes" {
  const exports: Record<string, string>;
  export default exports;
}

declare module "@bulky/utils" {
  interface IndexedObject<T> {
    [key: string]: T;
    [key: number]: T;
  }
  export type InternalMetadata = { name: string; type?: string };
  export interface FileProgress {
    uploadStarted: number | null;
    uploadComplete: boolean;
    percentage: number;
    bytesUploaded: number;
    bytesTotal: number;
  }
  export interface bulkyFile<
    TMeta = IndexedObject<any>,
    TBody = IndexedObject<any>
  > {
    data: Blob | File;
    extension: string;
    id: string;
    isPaused?: boolean;
    isRemote: boolean;
    meta: InternalMetadata & TMeta;
    name: string;
    preview?: string;
    progress?: FileProgress;
    remote?: {
      host: string;
      url: string;
      body?: Record<string, unknown>;
    };
    size: number;
    source?: string;
    type?: string;
    response?: {
      body: TBody;
      status: number;
      uploadURL: string | undefined;
    };
  }
  export interface Store {
    getState(): Record<string, unknown>;
    setState(patch: Record<string, unknown>): void;
    subscribe(listener: any): () => void;
  }
}
