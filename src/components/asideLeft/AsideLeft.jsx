import "./asideLeft.scss";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";

const AsideLeft = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [type, setType] = useState(true);
  const [show, setShow] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const [logged, setLogged] = useState(false);

  const handleClick = () => setShow(!show);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogged(true);
      } else {
        setLogged(false);
      }
    });
  }, [auth.currentUser]);

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then(() => {
        console.log("success google login");
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createUser = async () => {
    console.log(userEmail, userPassword);
    if (type) {
      await createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(() => {
          // Signed up
          setUserEmail("");
          setUserPassword("");
          setError("");
          onClose();
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
          console.log(errorMessage);
          // ..
        });
    } else {
      await signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then(() => {
          // Signed in
          setUserEmail("");
          setUserPassword("");
          setError("");
          onClose();
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
          console.log(errorMessage);
        });
    }
  };
  const handleSignout = async () => {
    await signOut(auth)
      .then(() => {
        setLogged(false);
        console.log("signed out");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="asideLeft">
      <ul>
        <li>
          <a className="selected">
            <ion-icon name="home-outline"></ion-icon>Home
          </a>
        </li>
        <li>
          <a>
            <ion-icon name="notifications-outline"></ion-icon>Notification
          </a>
        </li>
        <li>
          <a>
            <ion-icon name="pricetags-outline"></ion-icon>Shop
          </a>
        </li>
        <li>
          <a>
            <ion-icon name="mic-outline"></ion-icon>Conversation
          </a>
        </li>
        <li>
          <a>
            <ion-icon name="wallet-outline"></ion-icon>Wallet
          </a>
        </li>
        <li>
          <a>
            <ion-icon name="card-outline"></ion-icon>Subscription
          </a>
        </li>
        <li>
          <a>
            <ion-icon name="person-outline"></ion-icon>My Profile
          </a>
        </li>
        <li>
          <a>
            <ion-icon name="settings-outline"></ion-icon>Settings
          </a>
        </li>
      </ul>
      <div className="register-login">
        {logged ? (
          <a
            className="sign-in"
            onClick={handleSignout}
            style={{ color: "#7fffd4" }}
          >
            <ion-icon name="log-out-outline"></ion-icon>Logout
          </a>
        ) : (
          <a className="sign-in" onClick={onOpen}>
            <ion-icon name="log-in-outline"></ion-icon>sign-in | sign-up
          </a>
        )}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{type ? "Sign-up" : "Sign-in"}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form
                action="/"
                method="post"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <Input
                  placeholder="Enter Email"
                  type="email"
                  onChange={(e) => setUserEmail(e.target.value)}
                  value={userEmail}
                />
                <InputGroup size="md" margin="20px 0">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    onChange={(e) => setUserPassword(e.target.value)}
                    value={userPassword}
                  />
                  <InputRightElement
                    width="4.5rem"
                    borderRadius=".5rem"
                    height="2rem"
                    marginTop="2px"
                  >
                    <Button h="1.25rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {error ? <div style={{ color: "red" }}>{error}</div> : <></>}
                <span>
                  Already a user?{" "}
                  <a
                    style={{ color: "red", fontWeight: "bold" }}
                    onClick={() => {
                      setType(!type);
                      setError("");
                    }}
                  >
                    {type ? "Sign-in" : "Sign-up"}
                  </a>
                </span>
                <Button
                  type="submit"
                  variant="outline"
                  colorScheme="red"
                  width="100%"
                  margin="20px 0"
                  onClick={createUser}
                >
                  {type ? "Sign-up" : "Sign-in"}
                </Button>
                <Button
                  type="submit"
                  variant="outline"
                  width="100%"
                  colorScheme="blue"
                  marginBottom="20px"
                  onClick={googleLogin}
                >
                  Google
                </Button>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default AsideLeft;
