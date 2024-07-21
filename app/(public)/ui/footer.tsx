const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-between p-5 wrapper">
        <a href="https://velisaafrica.co.za/academy/" target="_blank">
          <h1 className="text-2xl font-semibold text-green-800">
            Velisa Africa
          </h1>
        </a>
        <p>All rights reserved. @{new Date().getFullYear()} Velisa Africa</p>
      </div>
    </footer>
  );
};

export default Footer;
