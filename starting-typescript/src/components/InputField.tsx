import "../styles.css"

const InputField = () => {
  return (
    <form className="input">
      <input type="text" placeholder="Pend Tasks" className="input-box" />
      <button className="input-submit">Go</button>
    </form>
  );
};

export default InputField;
