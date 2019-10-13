const random = () => {
  return Math.floor(Math.random() * 2900) + 1;
};

const generateStars = stars => {
  const values = [];

  for (let i = 1; i < stars; i += 1) {
    const x = `${random()}px`;
    const y = `${random()}px`;
    const keyColor = i % 3 !== 0 ? "rgba(255, 255, 255, 0.3)" : "#fff";
    values.push({
      boxShadow: `${x} ${y} #fff, `,
      keyframe: `${x} ${y} ${keyColor}, `,
    });
  }

  const boxShadow = values.reduce((acc, cur, idx) => {
    let iter = acc.concat(cur.boxShadow);
    if (idx === values.length - 1) {
      iter = acc.slice(0, acc.length - 2).concat(";");
    }
    return iter;
  }, "");

  const keyframe = values.reduce((acc, cur, idx) => {
    let iter = acc.concat(cur.keyframe);
    if (idx === values.length - 1) {
      iter = acc.slice(0, acc.length - 2).concat(";");
    }
    return iter;
  }, "");

  return { boxShadow, keyframe };
};

export default generateStars;
