import React from "react";
import assetImg from "../assets/images/asset.png";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";

const Login = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [values, setValues] = React.useState<any>({
    email: "",
    password: "",
  });

  const history = useHistory();

  React.useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      return history.push("/");
    }
  }, [history]);

  const handleSubmit = async () => {
    if (values?.email?.length > 0 && values?.password?.length > 0) {
      console.log(values);

      try {
        setLoading(true);
        const { data } = await axios.post(
          "https://reqres.in/api/login",
          values
        );
        if (data) {
          setLoading(false);
          localStorage.setItem("accessToken", data?.token);
          toast.success("User signed in successfully !");
          console.log(data);
          return history.push("/");
        }
      } catch (err) {
        setLoading(false);
        toast.error(err.response.data.error);
      }
    }
  };

  return (
    <div
      className="flexBox main"
      style={{ backgroundColor: "#192B3F" }}
    >
      <div className="flexBox">
        <div className="firstBox">
          <img src={assetImg} style={{ height: 300 }} alt="assets" />
          <h1 style={{ color: "#fff", fontSize: "2rem", marginBottom: "16px" }}>
            Welcome!
          </h1>
          <p
            className="para"
            style={{
              color: "#fff",
              display: "inline-block",
              //   width: "50%",
              lineHeight: 1.8,
              fontSize: "0.8rem",
              fontWeight: 400,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </p>
        </div>
        <div className="secondBox secondBoxFlexBox">
          <div className="box2">
            <Tabs isFitted>
              <TabList
                style={{
                  margin: "0px 20px",
                  marginTop: "20px",
                  color: "#DADADA",
                }}
              >
                <Tab
                  _selected={{ color: "#485867", borderColor: "#485867" }}
                  style={{ fontWeight: 800 }}
                >
                  Log In
                </Tab>
                <Tab
                  style={{ fontWeight: 800 }}
                  _selected={{ color: "#485867", borderColor: "#485867" }}
                >
                  Register
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <div style={{ margin: "60px 0" }}>
                    <Box style={{ marginTop: "15px", marginBottom: "12px" }}>
                      <p style={{ fontSize: "0.7rem" }}>Email/Mobile Number</p>
                    </Box>
                    <Input
                      isfullwidth="true"
                      placeholder="Email/Mobile Number"
                      style={{ fontSize: "0.7rem" }}
                      value={values.email}
                      onChange={(e) =>
                        setValues({ ...values, email: e.target.value })
                      }
                      size="md"
                    />

                    <Box style={{ marginBottom: "12px", marginTop: "25px" }}>
                      <p style={{ fontSize: "0.7rem" }}>Password</p>
                    </Box>
                    <Input
                      isfullwidth="true"
                      type="password"
                      placeholder="password"
                      style={{ fontSize: "0.7rem" }}
                      onChange={(e) =>
                        setValues({ ...values, password: e.target.value })
                      }
                      size="md"
                    />

                    <Box
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        marginTop: "12px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.6rem",
                          color: "#485867",
                          fontWeight: "bold",
                        }}
                      >
                        Forgot Password
                      </p>
                    </Box>
                  </div>
                  <Center>
                    <Button
                      colorScheme="#485867"
                      style={{ padding: "22px 48px", fontSize: "0.7rem" }}
                      backgroundColor="#485867"
                      onClick={() => handleSubmit()}
                      size="md"
                      isLoading={loading}
                    >
                      LOGIN
                    </Button>
                  </Center>
                  <Center style={{ marginTop: "10px" }}>
                    <p style={{ fontSize: "0.7rem", color: "grey" }}>
                      Not a member yet?{" "}
                      <span style={{ color: "#485867" }}>Register</span>
                    </p>
                  </Center>
                </TabPanel>
                <TabPanel>
                  <div style={{}}>
                    <Box style={{ marginTop: "15px" }}>
                      <p style={{ fontSize: "0.7rem" }}>Full Name</p>
                    </Box>
                    <Input
                      isfullwidth="true"
                      placeholder="Full Name"
                      style={{ fontSize: "0.7rem", marginTop: "10px" }}
                      size="md"
                    />
                    <Box style={{ marginTop: "15px" }}>
                      <p style={{ fontSize: "0.7rem" }}>Email</p>
                    </Box>
                    <Input
                      isfullwidth="true"
                      placeholder="Email"
                      style={{ fontSize: "0.7rem", marginTop: "10px" }}
                      size="md"
                    />
                    <Box style={{ marginTop: "15px" }}>
                      <p style={{ fontSize: "0.7rem" }}>Mobile Number</p>
                    </Box>
                    <Input
                      isfullwidth="true"
                      placeholder="Mobile Number"
                      style={{ fontSize: "0.7rem", marginTop: "10px" }}
                      size="md"
                    />
                    <Box style={{ marginTop: "15px" }}>
                      <p style={{ fontSize: "0.7rem" }}>Gender</p>
                    </Box>
                    <Input
                      isfullwidth="true"
                      placeholder="Gender"
                      style={{ fontSize: "0.7rem", marginTop: "10px" }}
                      size="md"
                    />
                    <Box style={{ marginTop: "15px" }}>
                      <p style={{ fontSize: "0.7rem" }}>Password</p>
                    </Box>
                    <Input
                      isfullwidth="true"
                      type="password"
                      placeholder="Password"
                      style={{ fontSize: "0.7rem", marginTop: "10px" }}
                      size="md"
                    />
                  </div>
                  <Center>
                    <Button
                      colorScheme="#485867"
                      style={{
                        padding: "22px 48px",
                        fontSize: "0.7rem",
                        marginTop: "27px",
                      }}
                      backgroundColor="#485867"
                      size="md"
                    >
                      LOGIN
                    </Button>
                  </Center>
                  <Center style={{ marginTop: "10px" }}>
                    <p style={{ fontSize: "0.7rem", color: "grey" }}>
                      Already a member?{" "}
                      <span style={{ color: "#485867" }}>Login</span>
                    </p>
                  </Center>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        ></div>
        <div>
          <div style={{ backgroundColor: "#fff", padding: "20px", width: 400 }}>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
