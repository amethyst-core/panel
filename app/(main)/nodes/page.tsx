import Header from "@/components/main/header";
import NodeCard from "@/components/main/node-card";

export default function Nodes() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-4 p-8 gap-5">
        <NodeCard
          instance_id="abc1"
          instance_name="Instance 1"
          instance_ram="4GB"
          instance_size="10GB"
          instance_status="online"
        />

        <NodeCard
          instance_id="abc2"
          instance_name="Instance 2"
          instance_ram="3GB"
          instance_size="8GB"
          instance_status="offline"
        />

        <NodeCard
          instance_id="abc1"
          instance_name="Instance 1"
          instance_ram="4GB"
          instance_size="10GB"
          instance_status="online"
        />

        <NodeCard
          instance_id="abc2"
          instance_name="Instance 2"
          instance_ram="3GB"
          instance_size="8GB"
          instance_status="offline"
        />

        <NodeCard
          instance_id="abc1"
          instance_name="Instance 1"
          instance_ram="4GB"
          instance_size="10GB"
          instance_status="online"
        />

        <NodeCard
          instance_id="abc2"
          instance_name="Instance 2"
          instance_ram="3GB"
          instance_size="8GB"
          instance_status="offline"
        />
      </div>
    </>
  );
}
