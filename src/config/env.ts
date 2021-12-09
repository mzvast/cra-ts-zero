// 判定页面运行环境

export const domainConfig = {
    prod: 'prod.domain',
    dev: 'localhost',
    test: 'test.domain'
};
type EnvType = 'test' | 'dev' | 'prod';

export const getEnvFromHost = (host: string) =>
    (Object.keys(domainConfig).find(
        key => host.includes(domainConfig[key])
    ) || 'dev') as EnvType;

export const env = getEnvFromHost(window.location.host);

export default env;
