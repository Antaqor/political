import React from 'react';

export interface Admin {
  id: string;
  name: string;
  role: string;
}

export default function AdminCard({ admin }: { admin: Admin }) {
  return (
    <div className="p-4 border rounded bg-white dark:bg-neutral-800 flex flex-col items-center gap-2 text-center w-full aspect-square">
      <div className="h-24 w-24 rounded-full bg-neutral-300 dark:bg-neutral-700 animate-pulse" />
      <h3 className="font-semibold">{admin.name}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">{admin.role}</p>
    </div>
  );
}
