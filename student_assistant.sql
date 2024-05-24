-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2023 at 12:51 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_assistant`
--

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

CREATE TABLE `application` (
  `app_id` int(11) NOT NULL,
  `reg_no` varchar(15) NOT NULL,
  `status` enum('approved','pending','cancelled') NOT NULL,
  `level` enum('COD','DEAN','SECURITY','LIBRARY','FINANCE','HOSTELS','EXAMINATIONS') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `application`
--

INSERT INTO `application` (`app_id`, `reg_no`, `status`, `level`) VALUES
(1, 'BIT/0015/17', 'approved', 'DEAN'),
(2, 'BIT/0041/19', 'pending', 'SECURITY');

-- --------------------------------------------------------

--
-- Table structure for table `clearance`
--

CREATE TABLE `clearance` (
  `clr_id` int(11) NOT NULL,
  `reg_no` varchar(15) NOT NULL,
  `status` enum('approved','pending','cancelled') NOT NULL,
  `level` enum('COD','DEAN','SECURITY','LIBRARY','FINANCE','HOSTELS','EXAMINATIONS') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clearance`
--

INSERT INTO `clearance` (`clr_id`, `reg_no`, `status`, `level`) VALUES
(1, 'BIT/0041/19', 'pending', 'SECURITY'),
(2, 'BIT/0015/17', 'approved', 'COD');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `details` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `details`) VALUES
(1, 'E-Mail Services'),
(2, 'Online Application and Clearance services'),
(3, 'E-Learning Services');

-- --------------------------------------------------------

--
-- Table structure for table `student_emails`
--

CREATE TABLE `student_emails` (
  `reg_no` varchar(15) NOT NULL,
  `surname` varchar(25) NOT NULL,
  `email` varchar(65) NOT NULL,
  `password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_emails`
--

INSERT INTO `student_emails` (`reg_no`, `surname`, `email`, `password`) VALUES
('BIT/0015/17', 'shammah', 'bshammah17@student.kibu.ac.ke', '1999nana'),
('BIT/0041/19', 'amwayi', 'wamwayi19@student.kibu.ac.ke', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `pin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `pin`) VALUES
(1, 'bshammah17@student.kibu.ac.ke', '1999'),
(2, 'poyile22@student.kibu.ac.ke', '0000'),
(3, 'bshammah', '1999'),
(4, 'wilber', '1234'),
(5, 'dkaruga', '1999'),
(6, 'poyile', '0000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`app_id`),
  ADD KEY `reg_no` (`reg_no`);

--
-- Indexes for table `clearance`
--
ALTER TABLE `clearance`
  ADD PRIMARY KEY (`clr_id`),
  ADD UNIQUE KEY `reg_no_2` (`reg_no`),
  ADD KEY `reg_no` (`reg_no`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student_emails`
--
ALTER TABLE `student_emails`
  ADD PRIMARY KEY (`reg_no`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reg_no` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `application`
--
ALTER TABLE `application`
  MODIFY `app_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `clearance`
--
ALTER TABLE `clearance`
  MODIFY `clr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
