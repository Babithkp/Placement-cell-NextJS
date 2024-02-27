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
  setUserId: (id:string)=>void
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

  const [newUserId,setNewUserId] = useState<FormContextProps["userId"]>("")

  const [userRegister,setUserRegiter] = useState<FormContextProps["userRegister"]>(true)

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

  const setUserId = (userId:string):void=>{
    setNewUserId(userId)
  }

  const value: FormContextProps = {
    setUserId,
    userId: newUserId,
    SignUpInfo,
    addUserSignUpInfo,
    addPlacementUserSignUpInfo,
    userRegister,
    changeUserRegiter
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
