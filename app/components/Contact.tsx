'use client'

export default function Contact() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Logika na odoslanie formulára
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col   min-h-screen">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <div className="line"></div>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <div className="line"></div>

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows={4} required></textarea>
      <div className="line"></div>

      <button type="submit">Submit</button>

      <div className="text-center">S-creations</div>
    </form>
  );
}
