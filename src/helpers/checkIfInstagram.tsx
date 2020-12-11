export function checkIfInstagram() {
  const userAgent = navigator.userAgent;
  const instagramFlagRegularExpression = RegExp("Instagram", "g");
  const isInstagram = instagramFlagRegularExpression.test(userAgent);

  return isInstagram;
}
