// express app setup
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config();
// mongoose setup

mongoose.connect(process.env.MONG, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const formSchema = new mongoose.Schema({
  questions: [{ type: mongoose.Schema.Types.Mixed }],
});

const Form = mongoose.model("Form", formSchema);

// express route to save form data
app.post("/api/forms", async (req, res) => {
  const { questions } = req.body;

  try {
    const newForm = new Form({ questions });
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// express route to retrieve form data
app.get("/api/forms/:formId", async (req, res) => {
  const { formId } = req.params;

  try {
    const form = await Form.findById(formId);
    res.json(form);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
