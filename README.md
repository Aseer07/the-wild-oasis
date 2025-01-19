# The Wild Oasis

The Wild Oasis is a hotel management application designed to streamline daily operations for hotel employees. This feature-rich app includes functionalities like cabin management, booking management, guest management, and insightful dashboards. The application is built using modern technologies to ensure a smooth and efficient user experience.

## Features

### Authentication

    . Secure login for hotel employees.

    . New users can sign up within the app with restricted access to ensure only employees can register.

    . Employees can upload avatars, and update their name and password.

### Cabins

    . A table view displays all cabins, showing photo, name, capacity, price, and any current discounts.

    . Employees can add, update, or delete cabins, including uploading cabin photos.

### Bookings

    . A table view lists all bookings with details like arrival and departure dates, status ("unconfirmed", "checked-in", "checked-out"), and payment status.

    . Bookings include data such as the number of guests, nights, guest observations, breakfast booking, and total price.

    . Employees can delete, check-in, or check-out a booking.

### Check-In/Out

    . Employees can confirm payment upon guest check-in.

    . Guests can opt to add breakfast for their entire stay during check-in.

### Guests

    . Guest details include full name, email, national ID, nationality, and a country flag for quick identification.

### Dashboard

    . Displays important information for the last 7, 30, or 90 days:

        . List of guests checking in and out.

        . Booking statistics and occupancy rates.

        . Charts showing daily hotel sales, "total" and "extras" (breakfast only).

        . A chart showing stay durations for key metrics.

### Settings

    . Employees can define app-wide settings like breakfast price and min/max nights for bookings.

### Dark Mode

    . A toggle for dark mode ensures a comfortable user experience in different lighting conditions.

## Tech Stack

### Frontend

    . Framework: Vite + React.js

    . Routing: React Router

    . Styling: Styled Components

    . Form Management: React Hook Form

    . Remote State Management: React Query

    . UI State Management: Context API

## Backend

    . Backend-as-a-Service: Supabase

## Additional Tools

    . Icons: React Icons

    . Toast Notifications: React Hot Toast

    . Charts: Recharts

    . Date Utilities: Date-fns
