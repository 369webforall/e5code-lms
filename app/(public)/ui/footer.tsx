const Footer = () => {
  return (
    <div
      className="
    border-t-[1px]"
    >
      <div className="flex items-center justify-between  px-4 py-4 max-w-7xl mx-auto">
        <div>
          <a href="https://velisaafrica.co.za/academy/" target="-blank">
            <h1 className="text-2xl font-semibold text-green-800">
              Velisa Africa
            </h1>
          </a>
        </div>
        <p>All rights reserved. @{new Date().getFullYear()} Velisa Africa</p>
      </div>
    </div>
  );
};

export default Footer;
