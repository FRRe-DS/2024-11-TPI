const GradientButton = ({ label }: { label: string }) => {
    return (
        <button className="relative flex items-center justify-center w-32 h-12 rounded-full overflow-hidden text-white font-semibold text-lg cursor-pointer border-none focus:outline-none">
            {/* Blobs for background effect */}
            <span className="blob absolute left-0 top-0 w-20 h-12 bg-orange-400 rounded-full transform transition-transform duration-300 ease-in-out"></span>
            <span className="blob absolute left-7 top-0 w-20 h-12 bg-purple-600 rounded-full transform transition-transform duration-300 ease-in-out"></span>
            <span className="blob absolute left-16 top-[-0.25rem] w-20 h-12 bg-pink-500 rounded-full transform transition-transform duration-300 ease-in-out"></span>
            <span className="blob absolute left-20 top-5 w-20 h-12 bg-blue-600 rounded-full transform transition-transform duration-300 ease-in-out"></span>

            {/* Text overlay with blur */}
            <span className="text z-10 relative px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-300/60 to-gray-400/30 backdrop-blur-md">
                {label}
            </span>
        </button>
    );
};

export default GradientButton;