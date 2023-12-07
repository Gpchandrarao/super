import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

const initialContactsList = [
  {
    id: uuidv4(),
    items: "ans 1",
    blongs: "cat 1",
  },
  {
    id: uuidv4(),
    items: "ans 2",
    blongs: "cat 2",
  },
];

class Categorize extends Component {
  state = {
    contactsList: initialContactsList,
    desInput: "",
    addCategories: [],
  };

  onChangeDes = (e) => {
    this.setState({ desInput: e.target.value });
  };

  onClickAddCategory = (e) => {
    const { desInput } = this.setState;
    if (desInput !== "") {
      this.setState((prevState) => ({
        addCategories: [...prevState.addCategories, prevState.desInput],
        desInput: "",
      }));
    } else {
      console.log("Error in adding");
    }
  };
  render() {
    const { desInput, addCategories } = this.state;
    console.log(addCategories);
    return (
      <div className="m-5  p-5 h-auto border-2 border-l-8 border-l-blue-700 shadow-black  rounded-lg">
        <div className="flex items-center gap-2">
          <p className="text-2xl font-extrabold ">&#8280;</p>
          <h1 className="text-lg font-bold">Question 1</h1>
        </div>
        <div className="w-75 mb-5">
          <input
            placeholder="Description(Optional)"
            type="text"
            className="border-2 p-2 w-8/12 mt-3"
            value={desInput}
            onChange={this.onChangeDes}
          />
          <button
            onClick={this.onClickAddCategory}
            className="bg-blue-600 text-white p-2 ml-2 w-16 rounded-lg hover:opacity-80 font-semibold"
          >
            Add
          </button>
        </div>
        <div>
          <h1 className="font-semibold text-lg mb-5">Categories</h1>
          {addCategories.map((question, index) => (
            <div className="flex items-center gap-3 mb-2" key={index}>
              <p className="text-2xl font-extrabold">&#8280;</p>
              <input
                key={index}
                value={question}
                className="border p-2 font-lg"
                type="text"
              />
            </div>
          ))}
        </div>

        <form></form>

        <div className="flex items-center gap-10 mt-12">
          <div className="text-center">
            <h2>Item</h2>
            <div className="flex items-center mt-4 gap-3 mb-8">
              <p className="text-2xl font-extrabold">&#8280;</p>
              <input type="text" className="border p-2" />
              <p className="font-extrabold cursor-pointer">&#x2716;</p>
            </div>
          </div>

          <div className="text-center">
            <h2>Belongs To</h2>
            <div className="flex items-center mt-4 gap-3 mb-8">
              {addCategories.length >= 1 && (
                <select>
                  {addCategories.map((each, index) => (
                    <option className="border-2" key={index}>
                      {each}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Categorize;
