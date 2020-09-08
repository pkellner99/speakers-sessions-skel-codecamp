const isProd = process.env.NODE_ENV === 'production';

const overRideAssetPrefix = false;

const assetPrefix =
    isProd && !overRideAssetPrefix
        ? '/speakers-sessions-skel-codecamp'
        : '';

const basePath =
    isProd && !overRideAssetPrefix
        ? '/speakers-sessions-skel-codecamp'
        : '';

module.exports = {
    basePath,
    assetPrefix
};
