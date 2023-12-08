"use client";

export default function Contact() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Logika na odoslanie formulára
  };

  return (
    <div className="form flex flex-col   min-h-screen justify-center bg-gray1 p-4">
      <div className="contact flex flex-col text-center">
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          nemo enim iste animi numquam nihil!
        </p>
      </div>
      <div className="form flex flex-col ">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <div className="line"></div>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <div className="line"></div>

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={4} required></textarea>
          <div className="line"></div>
        </form>
        <button className="text-right" type="submit">Submit</button>
        <div className="text-center">S-creations</div>
        <div className="text-center">Icons</div>
      </div>
    </div>
  );
}
