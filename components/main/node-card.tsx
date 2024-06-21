import "./status-dot.scss";
import { Button } from "../ui/button";

import Link from "next/link";

import { EllipsisVertical } from "lucide-react";

interface Props {
  instance_id: string;
  instance_name: string;
  instance_ram: string;
  instance_size: string;
  instance_status: string;
}
export default function NodeCard({
  instance_id,
  instance_name,
  instance_ram,
  instance_size,
  instance_status,
}: Props) {
  return (
    <Link href={`/node/${instance_id}`}>
      <div className="rounded-lg border hover:border-muted-foreground/60 cursor-pointer transition bg-card text-card-foreground shadow-sm w-fit">
        <div className="flex space-y-1.5 p-6 gap-6">
          <div className="flex space-x-2.5 items-center">
            <div className="image">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 16C30 23.728 23.735 30 16 30C8.265 30 2 23.728 2 16C2 8.265 8.265 2 16 2C23.735 2 30 8.265 30 16Z"
                  fill="#E95420"
                />
                <path
                  d="M6.82154 14.1563C5.81185 14.1563 5 14.9865 5 16.0035C5 17.0205 5.81867 17.8507 6.82154 17.8507C7.82442 17.8507 8.64309 17.0205 8.64309 16.0035C8.64309 14.9795 7.82442 14.1563 6.82154 14.1563ZM19.8316 22.5482C18.9583 23.0602 18.665 24.1879 19.163 25.0734C19.6679 25.959 20.7799 26.2634 21.6531 25.7514C22.5264 25.2395 22.8197 24.1118 22.3217 23.2262C21.8101 22.3476 20.698 22.0432 19.8316 22.5482ZM10.7785 16.0035C10.7785 14.177 11.6722 12.565 13.0434 11.5896L11.7131 9.32725C10.1167 10.4065 8.93645 12.06 8.43842 13.9902C9.01149 14.4676 9.37989 15.194 9.37989 16.0035C9.37989 16.8129 9.01149 17.5393 8.43842 18.0167C8.92962 19.9469 10.1167 21.6004 11.7131 22.6797L13.0434 20.4174C11.6722 19.4419 10.7785 17.8299 10.7785 16.0035ZM16.0998 10.6071C18.8833 10.6071 21.1619 12.7657 21.4007 15.5261L24 15.4846C23.8704 13.4506 22.9971 11.6241 21.6463 10.282C20.9504 10.5449 20.1522 10.5034 19.4632 10.1021C18.7673 9.69393 18.3375 9.01593 18.2147 8.26875C17.5393 8.08195 16.8298 7.97817 16.0998 7.97817C14.8377 7.97817 13.6506 8.27566 12.5932 8.80838L13.8621 11.1053C14.5375 10.787 15.3016 10.6071 16.0998 10.6071ZM16.0998 21.3998C15.3016 21.3998 14.5375 21.2199 13.8553 20.9017L12.5864 23.1985C13.6438 23.7313 14.8377 24.0287 16.093 24.0287C16.823 24.0287 17.5325 23.925 18.2079 23.7382C18.3239 22.9979 18.7605 22.313 19.4564 21.9048C20.1454 21.4966 20.9504 21.462 21.6395 21.7249C22.9835 20.3828 23.8636 18.5563 23.9932 16.5223L21.3939 16.4808C21.1619 19.2343 18.8833 21.3998 16.0998 21.3998ZM19.8248 9.45178C20.698 9.96374 21.8101 9.65933 22.3149 8.77378C22.8197 7.88824 22.5196 6.76054 21.6463 6.24859C20.7731 5.73663 19.661 6.04104 19.1562 6.92659C18.6582 7.81213 18.9583 8.93983 19.8248 9.45178Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg leading-none tracking-tight flex items-center">
                {instance_name}
                <span
                  className={`status-dot status-${instance_status} ml-3`}
                ></span>
              </h3>
              <p className="text-xs text-muted-foreground">
                <span>
                  {instance_ram} / {instance_size}
                </span>
              </p>
            </div>
          </div>
          <div className="actions">
            <Button size="icon" variant="secondary">
              <EllipsisVertical />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
