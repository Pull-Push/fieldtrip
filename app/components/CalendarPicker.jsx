"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

export default function Calendar() {
	const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams();


	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	const handleUpdateQuery = (e) => {
        e.preventDefault()
        const unformattedStart = new Date(startDate)
        const formattedStart = new Intl.DateTimeFormat('en-CA').format(unformattedStart).replace(/-/g, '')

        const unformattedEnd = new Date(endDate)
        const formattedEnd = new Intl.DateTimeFormat('en-CA').format(unformattedEnd).replace(/-/g, '')

		const params = new URLSearchParams(searchParams.toString());
		params.set("dates", `${formattedStart}-${formattedEnd}`);

		router.push(`${pathname}?${params.toString()}`, { scroll: false });
	};

	return (
		<div>
			<form onSubmit={(e) => handleUpdateQuery(e)}>
				<label htmlFor="start">Start Date:</label>
				<input
					type="date"
					name="start"
					id="start"
					value={startDate || ""}
					onChange={(e) => setStartDate(e.target.value)}
				/>
				<label htmlFor="start">End Date:</label>
				<input
					type="date"
					name="end"
					id="end"
					value={endDate || ""}
					onChange={(e) => setEndDate(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
		</div>
	);
}
