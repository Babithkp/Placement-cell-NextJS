"use client"
import React, { createContext, useContext, useState } from "react";

export default interface FormContextProps {
  SignUpInfo: {
    email: string;
    password: string;
    type: string;
  };

  addUserSignUpInfo: (email: string, password: string) => void;
  addPlacementUserSignUpInfo: (email: string, password: string) => void;
  userRegister : boolean
  changeUserRegiter: (state:boolean)=>void
  
  userId: string
  LoginWithUser:()=>void
  storeToSession: (userInfo:object) => void

  
}

export const FormContext = createContext<FormContextProps | undefined>(
  undefined,
);

export const useGlobalContext = () => useContext(FormContext)

export const FormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [SignUpInfo, setUserSignUpInfo] = useState<
    FormContextProps["SignUpInfo"]
  >({
    email: "",
    password: "",
    type: "",
  });

 

  const [userRegister,setUserRegiter] = useState<FormContextProps["userRegister"]>(true)
  const [newUserId,setUserId] = useState<FormContextProps["userId"]>('')

  const changeUserRegiter = (state:boolean):void =>{
        setUserRegiter(state) 
        
  }
  const addUserSignUpInfo = (email: string, password: string): void => {
    setUserSignUpInfo({
      email,
      password,
      type: "user",
    });
    
  };


  const addPlacementUserSignUpInfo = (
    email: string,
    password: string,
  ): void => {
    setUserSignUpInfo({
      email,
      password,
      type: "placement-cell",
    });
  };


  function LoginWithUser(){
    const value = sessionStorage.getItem("userInfo")
    if(value){
      const filter = JSON.parse(value)    
      setUserId(filter.userId)
    }
  }
  
  function storeToSession(userInfo:object){
    const convert = JSON.stringify(userInfo)
    const value = sessionStorage.setItem("userInfo",convert)
  }


  const value: FormContextProps = {
    storeToSession,
    LoginWithUser,
    userId:newUserId,
    SignUpInfo,
    addUserSignUpInfo,
    addPlacementUserSignUpInfo,
    userRegister,
    changeUserRegiter
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
