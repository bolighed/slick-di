export declare class DIError extends Error {
    name: string;
    message: string;
    constructor(message?: string);
    toString(): string;
}
export declare class DIAggregateError extends DIError {
    error: Error;
    constructor(message: string, errors: Error);
    readonly inner: Error;
    toString(): string;
}
export declare function createError(name: string, message: string, error?: Error): Error;
