import type { Task } from "../types/user";

export const exportTasksToJson = (selectedTasks: Task[]): void => {
    // Get the current date and time for the filename
    const timestamp = new Date().toLocaleDateString().replace(/[/:, ]/g, "_");
    const filename = `Tasks_${timestamp}.json`;

    // Create a JSON blob
    const dataStr = JSON.stringify(selectedTasks, null, 2);
    const blob = new Blob([dataStr], {type: "application/json" });

    // create a URL for the blob
    const url = window.URL.createObjectURL(blob);

    // create a link element and initiate the download
    const linkElement = document.createElement("a");
    linkElement.href = url;
    linkElement.download = filename;
    linkElement.click();
    console.log(`Exported tasks to ${filename}`);
    // Clean up the URL object
    window.URL.revokeObjectURL(url);
};