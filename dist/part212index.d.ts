declare type 타입추출<T> = T extends (() => infer R) ? R : unknown;
declare type a = 타입추출<() => void>;
declare type b = ReturnType<() => void>;
