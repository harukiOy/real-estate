import BlackButton from "@/components/UI/Buttons/BlackButton";
import Image from "next/image";
import React, { FC } from "react";
import img from "../../../../../../../public/editModalImage.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { userProjects } from "@/types";

type Props = {
  className: string;
  item: userProjects;
};

const ProjectTableRaw: FC<Props> = ({ className, item }) => {
  return (
    <tr className={`${className}`}>
      <td className="flex items-center space-x-2 ">
        <Image
          src={img}
          alt="img"
          className="my-4 ml-6 rounded-md w-12 h-12 "
        />
        <p>{item.name}</p>
      </td>
      <td className="px-1">{item.type}</td>
      <td className="px-1">{item.size}</td>
      <td className="px-1">{item.price}</td>
      <td className="px-1">{item.creationData}</td>
      <td className="px-1">
        <BlackButton>Answer</BlackButton>
      </td>
      <td className="px-1">
        <BsThreeDotsVertical />
      </td>
    </tr>
  );
};

export default ProjectTableRaw;