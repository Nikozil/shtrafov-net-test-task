const getHelpUin = (uin: string) => {
  if (uin.length !== 24 && uin.length !== 19) return null;
  // const mask = [...Array(11).keys()].slice(1);
  const mask = Array.from(Array(11).keys()).slice(1);
  const mask2 = [...mask.slice(2), ...mask.slice(0, 2)];

  const getControlNumber = (uin: string, mask: number[]) =>
    uin
      .slice()
      .split('')
      .reduce((summ, value, index) => {
        return (summ + +value * mask[index % 10]) % 11;
      }, 0);

  let controlNumber = getControlNumber(uin, mask);

  controlNumber =
    controlNumber !== 10 ? controlNumber : getControlNumber(uin, mask2);
  controlNumber = controlNumber !== 10 ? controlNumber : 0;
  return uin + controlNumber;
};
export default getHelpUin;
