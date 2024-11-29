export default function Blob({ className }: { className?: string }) {
    return (
        <div
            className={`bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-xl animate-blob ${className}`}
        />
    );
}
