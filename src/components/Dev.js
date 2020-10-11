export const Dev = () => {
  const instagramFlagRegularExpression = RegExp("Instagram", "g");
  const isInstagram = instagramFlagRegularExpression.test(navigator.userAgent);
  return (
    <div>
      <p className="font-bold">User Agent String</p>
      <p>{navigator.userAgent}</p>
      <p className="font-bold">Is Instagram Client</p>
      <p>{isInstagram ? "YES" : "NO"}</p>
    </div>
  );
};
