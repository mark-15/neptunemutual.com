import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import styles from "./style.module.scss";
import { useLocalStorage } from "@lib/hooks/useLocalStorage";
import { useEffect } from "react";
import { Trans } from "@lingui/macro";

function handleClose() {
  // Called when hit `Esc`
  console.log("Please accept cookies");
}

export const CookiePolicy = () => {
  const [accepted, setAccepted] = useLocalStorage("dev-cookies", false);

  function removeGtag() {
    const gtagScript = document.querySelector("#gtag-init");
    if (gtagScript) {
      gtagScript.remove();
    }
  }

  useEffect(() => {
    if (!accepted) removeGtag();
  }, [accepted]);

  function closeModal() {
    setAccepted(true);
  }

  const isOpen = !accepted;
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={styles.dialog} onClose={handleClose}>
        <div className={styles.dialog_content}>
          <Transition.Child as={Fragment}>
            <Dialog.Overlay className={styles.overlay} />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className={styles.trick_el} aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child as={Fragment}>
            <div className={styles.content_container}>
              <Dialog.Title as="h3" className={styles.title}>
                <Trans>Cookies disclaimer</Trans>
              </Dialog.Title>
              <p>
                <Trans>
                  We use third-party{" "}
                  <a href={"#"}>
                    <a>cookies</a>
                  </a>{" "}
                  in order to personalize your experience.
                </Trans>
              </p>
              <div>
                <button className={styles.decline} onClick={closeModal}>
                  <Trans>Decline</Trans>
                </button>
                <button className={styles.accept} onClick={closeModal}>
                  <Trans>Accept</Trans>
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
