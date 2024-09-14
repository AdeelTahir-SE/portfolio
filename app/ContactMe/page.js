// pages/contact.js
"use client"
import React from 'react';


async function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const form = event.target;
    const formData = new FormData(form);
  
    try {
      // Convert FormData to JSON
      const data = Object.fromEntries(formData.entries());
  
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (res.ok) {
        alert('Message sent');
        form.reset(); // Reset the form after successful submission
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
  }

export default function ContactMe() {
  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center dark:bg-slate-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md dark:bg-slate-800" >
        <h2 className="text-3xl font-bold mb-6 text-purple-800 dark:text-purple-400">Contact Me</h2>
        <form onSubmit={handleFormSubmit} method="POST">
          <div className="mb-4">
            <label className="block text-purple-700 dark:text-purple-400 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border bg-white border-purple-300 rounded w-full py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-purple-700 dark:text-purple-400 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border bg-white border-purple-300 rounded w-full py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-purple-700 dark:text-purple-400 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="shadow appearance-none border bg-white border-purple-300 rounded w-full py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
