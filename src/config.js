const DevelopApiHost = 'https://nowapi.theflashofsonic.now.sh';
const ReleaseApiHost = 'https://prod.api.vinehealth.ai/';

const ApiHost = __DEV__ ? DevelopApiHost : ReleaseApiHost;

export default ApiHost;
