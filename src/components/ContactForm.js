import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log("Form submitted:", formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <Box className="col-md-6 col-10 mx-auto" boxShadow={3} p={4} borderRadius={4} id="contactus">
      <Typography variant="h4" gutterBottom align="center">Contact Us</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          id="subject"
          name="subject"
          label="Subject"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <TextField
          id="message"
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
      <Typography variant="body1" color="textSecondary" align="center" mt={2}>
        We will contact you within 24 hours.
      </Typography>
    </Box>
  );
};

export default ContactForm;
