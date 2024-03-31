const useLogic = ({ onClose }: { onClose: () => void}) => {
    const handleClickOutside = (e: MouseEvent) => {
        if ((e?.target as HTMLElement)?.id === "new-quote-modal") {
            onClose();
        }
    };

    document.addEventListener("click", handleClickOutside);
}

export default useLogic;