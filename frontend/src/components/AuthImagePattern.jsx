const AuthImagePattern = ({ title, subtitle, text1, text2, text3 }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        {/* Chat Bubble Design */}
        <div className="space-y-4 mb-8">
          {/* Incoming Message */}
          <div className="flex justify-start">
            <div className="bg-primary/10 text-primary p-4 rounded-tl-lg rounded-tr-lg rounded-br-lg max-w-xs">
              {text1}
            </div>
          </div>
          {/* Outgoing Message */}
          <div className="flex justify-end">
            <div className="bg-secondary/10 text-secondary p-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg max-w-xs">
              {text2}
            </div>
          </div>
          {/* Incoming Message */}
          <div className="flex justify-start">
            <div className="bg-primary/10 text-primary p-4 rounded-tl-lg rounded-tr-lg rounded-br-lg max-w-xs">
              {text3}
            </div>
          </div>
        </div>

        {/* Title and Subtitle */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
