export interface ErrorResponse {
    errors: ErrorData[]
}

export interface ErrorData {
    status: string;
    source: any;
    detail: string;
    code: string;
}