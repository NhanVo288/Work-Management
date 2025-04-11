import { useState } from "react";
import { Pencil } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import EditTaskForm from "./edit-task-form";
import { TaskType } from "@/types/api.type";

const EditTaskDialog = ({ task }: { task: TaskType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  return (
    <Dialog modal={true} open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full justify-start">
          <Pencil className="mr-2 h-4 w-4" />
          Edit Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-auto my-5 border-0">
        <EditTaskForm task={task} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default EditTaskDialog;
