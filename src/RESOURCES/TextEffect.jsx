import { useState, useEffect } from "react";

const TypingEffect = () => {
  const textArray = [
    "stunning",
    "modern",
    "unique",
    "creative",
    "professional",
  ];
  const [text, setText] = useState("dynamic");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textArray[index];
    let typingTimeout;

    if (!isDeleting) {
      typingTimeout = setTimeout(() => {
        setText(currentText.slice(0, text.length + 1)); // Typing effect
      }, 200);
      if (text.length === currentText.length) {
        setTimeout(() => {
          setIsDeleting(true); // Start deleting after the full text is typed
        }, 2500);
      }
    } else {
      typingTimeout = setTimeout(() => {
        setText(currentText.slice(0, text.length - 1)); // Deleting effect
      }, 100);
      if (text.length === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % textArray.length); // Cycle through text
      }
    }

    return () => clearTimeout(typingTimeout); // Cleanup timeout on component unmount or effect re-run
  }, [text, isDeleting, index, textArray]);

  return <span className="font-main">{text}</span>;
};

export default TypingEffect;
