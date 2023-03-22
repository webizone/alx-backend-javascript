export default function loadBalancer(chinaDownload, USDownload) {
  return Promise
    .race([chinaDownload, USDownload])
    .then((res) => res);
}export default function loadBalancer(chinaDownload, USDownload) {
  return Promise
    .race([chinaDownload, USDownload])
    .then((res) => res);
}
