import { useState } from "react";

const useLogic = () => {
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
    }

    return {
        open,
        setOpen,
        onClose
    }
}

export default useLogic;