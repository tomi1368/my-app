"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const Input = ({
  setFilteredData,
  users,
}: {
  setFilteredData: any;
  users: any[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const usernameParam = searchParams.get("username");
  const [username, setUsername] = useState("");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.username.toLowerCase().includes(username.toLowerCase())
    );
    setFilteredData(filteredUsers);
  }, [username, users]);

  useEffect(() => {
    if (usernameParam) {
      setUsername(usernameParam);
    }
  }, []);

  const handleChange = (ev: any) => {
    const username = ev.target.value;
    setUsername(username);
    router.push(`${pathname}?${createQueryString("username", username)}`);
  };

  return <input value={username} onChange={handleChange}></input>;
};

export default Input;
