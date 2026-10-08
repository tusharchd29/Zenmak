"use client";

import { useState, useTransition } from "react";
import { Card } from "@/components/Card";
import { Icon } from "@/components/icon";
import { setUserActive, setUserPin, updateUserName } from "./actions";

type User = { id: string; name: string; role: "owner" | "rep"; active: boolean };

export function TeamMemberRow({ user, isSelf }: { user: User; isSelf: boolean }) {
  const [name, setName] = useState(user.name);
  const [active, setActive] = useState(user.active);
  const [editing, setEditing] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next = String(fd.get("name") || "").trim();
    setError(null);
    startTransition(async () => {
      const result = await updateUserName(user.id, next);
      if (result.ok) {
        setName(next);
        setEditing(false);
      } else {
        setError(result.message ?? "Couldn't save");
      }
    });
  }

  if (editing) {
    return (
      <Card>
        <form onSubmit={handleSave} className="flex items-center gap-2">
          <input
            name="name"
            defaultValue={name}
            required
            autoFocus
            maxLength={60}
            className="input-field text-sm flex-1"
          />
          <button type="submit" disabled={pending} className="btn-primary text-xs px-3 py-1.5 whitespace-nowrap">
            {pending ? "Saving…" : "Save"}
          </button>
          <button
            type="button"
            onClick={() => {
              setError(null);
              setEditing(false);
            }}
            disabled={pending}
            className="text-xs text-[var(--muted)] underline whitespace-nowrap"
          >
            Cancel
          </button>
        </form>
        {error && <div className="text-xs text-red-600 mt-2">{error}</div>}
      </Card>
    );
  }

  function handlePin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const pin = String(new FormData(e.currentTarget).get("pin") || "").trim();
    setError(null);
    startTransition(async () => {
      const result = await setUserPin(user.id, pin);
      if (result.ok) {
        setPinOpen(false);
        setNotice(`New PIN saved for ${name}. Tell them in person or by phone.`);
      } else {
        setError(result.message ?? "Couldn't save");
      }
    });
  }

  function toggleActive() {
    const next = !active;
    if (!next && !window.confirm(`Deactivate ${name}? They won't be able to log in. Their past records stay.`)) return;
    setError(null);
    startTransition(async () => {
      const result = await setUserActive(user.id, next);
      if (result.ok) setActive(next);
      else setError(result.message ?? "Couldn't save");
    });
  }

  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className={`font-medium ${active ? "text-[var(--ink)]" : "text-[var(--muted)] line-through"}`}>
            {name}
            {isSelf && <span className="text-xs text-[var(--muted)] font-normal"> (you)</span>}
          </div>
          <div className="text-xs text-[var(--muted)] capitalize">
            {user.role}
            {!active && " · Inactive — can't log in"}
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setNotice(null);
              setPinOpen((o) => !o);
            }}
            className="text-xs text-[var(--teal)] font-medium hover:underline"
          >
            Change PIN
          </button>
          {!isSelf && (
            <button type="button" onClick={toggleActive} disabled={pending} className="text-xs text-[var(--muted)] hover:underline">
              {active ? "Deactivate" : "Reactivate"}
            </button>
          )}
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="text-[var(--muted)] hover:text-[var(--teal)] p-1 -m-1"
            aria-label={`Rename ${name}`}
          >
            <Icon name="edit" size={16} />
          </button>
        </div>
      </div>
      {pinOpen && (
        <form onSubmit={handlePin} className="flex items-center gap-2 mt-3">
          <input
            name="pin"
            inputMode="numeric"
            pattern="[0-9]{4,8}"
            minLength={4}
            maxLength={8}
            required
            autoFocus
            placeholder="New PIN (4–8 digits)"
            className="input-field text-sm flex-1"
          />
          <button type="submit" disabled={pending} className="btn-primary text-xs px-3 py-1.5 whitespace-nowrap">
            {pending ? "Saving…" : "Save PIN"}
          </button>
        </form>
      )}
      {notice && <div className="text-xs text-[var(--teal)] mt-2">{notice}</div>}
      {error && <div className="text-xs text-red-600 mt-2">{error}</div>}
    </Card>
  );
}
