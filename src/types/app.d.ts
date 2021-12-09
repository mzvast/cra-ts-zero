declare interface RouteConfig {
    path?: string;
    component?: any;
    exact?: boolean;
    redirect?: boolean;
    private?: boolean;
    from?: string;
    to?: string;
    role?: number;
    showHeader?: boolean; // 是否强制显示header，默认只有private的显示header
}
