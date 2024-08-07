-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2022 at 07:32 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ilibrary`
--

-- --------------------------------------------------------

--
-- Table structure for table `accept_books`
--

CREATE TABLE `accept_books` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userEnrollment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `noofbook` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `description`, `category`, `noofbook`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Java: Java Programming For Beginners - A Simple Start to Java Programming', 'Thomas Wield', 'By a Software EngineerThis Java Programming guide will make it as simple as possible for you to learn the...', 'Java Programming', '13', '/storage/books/z8OmAMkeNmlNkrVTakiTpBfphaOr6CYc4ujPAl9f.jpg', '2022-05-31 00:49:39', '2022-05-31 00:49:39'),
(2, 'AVA: Easy Java Programming for Beginners, Your Step-By-Step Guide to Learning Java Programming', 'Alvaro Felix', 'Write your first code in Java using simple, step-by-step examples that model real-word objects and events,......................', 'Java Programming', '10', '/storage/books/7G84Rftq4gTFzlBUcvB3yJFkEx0N3iB6cSE2O1bZ.jpg', '2022-05-31 00:51:50', '2022-05-31 00:51:50'),
(3, 'Learn C# in One Day and Learn It Well: C# for Beginners with Hands-on Project', 'Jamie Chan', 'Master C# Programming with a unique Hands-On Project Have you always wanted to learn computer  .', 'Web Development', '3', '/storage/books/s4fnOe1fG4gyqmoRpv3fq4xJGDPntcmjuJm5P0nL.jpg', '2022-05-31 00:58:56', '2022-05-31 00:58:56'),
(4, 'Learn Java 8 In a Week: A Beginner\'s Guide to Java Programming', 'Rathore Mahavir.', 'Learn the fundamental programming principles using java one of the most widely used programming', 'Java Programming', '5', '/storage/books/vDHWmT92zznwoUqtlDnXetCrK1wV0D709WplnUOE.jpg', '2022-05-31 01:02:13', '2022-05-31 01:02:13'),
(6, 'Java for Absolute Beginners: Learn to Program the Fundamentals the Java 9+ Way', 'Iuliana Cosmina', 'Write your first code in Java using simple, step-by-step examples that model real-word objects  ...', 'Java Programming', '7', '/storage/books/djDhxENDCctU2uTbMD7KNgZhF56LFxMFbkFTrtsn.jpg', '2022-05-31 01:07:34', '2022-05-31 01:07:34'),
(7, 'HTML & CSS Crash Course: Learn html and css with easy to follow-step-by-step tutorials', 'David McMahon', 'Learn HTML & CSS with the Ultimate Crash Course on HTML and CSS! Learn Fast With Step by Step', 'Web Development', '2', '/storage/books/1aC4Oqpad2wdgENCz4dCuYT8r6n5tf4sU1FOanKV.jpg', '2022-05-31 01:07:54', '2022-05-31 01:07:54'),
(8, 'How to Hack Computers: how to hack computers, hacking for beginners, penetration testing', 'Joel Tope', 'security, computer hacking, hacking techniques, network scanning Tope|Joel  ...', 'Networking', '7', '/storage/books/LAvTtYcLz33cW7K8ui74fRZAWXIBl95kNlkZPhLP.jpg', '2022-05-31 01:08:28', '2022-05-31 01:08:28'),
(9, 'PHP: Learn PHP in 24 Hours or Less - A Beginner\'s Guide To Learning PHP Programming Now', 'Dwight Robert.', 'PHP, PHP Programming, PHP Course In this book you will find detailed instruction', 'Web Development', '5', '/storage/books/ESOlx0E0jkwGSkZasCORTUAFXuwU1I9fEr7jFCmq.jpg', '2022-05-31 01:09:42', '2022-05-31 01:09:42'),
(10, 'java interview questions: Top 20 java interview programs and answers', 'james harrely', 'Java Interview Question is here to help you through the INTERVIEW process, teaching you what you ..', 'Java Programming', '8', '/storage/books/OuIUbaKa6UHzscczrHR1pBPofYLg3XiJfQepxjRb.jpg', '2022-05-31 01:10:16', '2022-05-31 01:10:16'),
(13, '100+ Java Programs with Output: Useful collection of Java Programs', 'Pataskar Aniket.', 'Essential JAVA Interview Skills-Made Easy! The main objective of this interview book is not to give .......', 'Java Programming', '6', '/storage/books/fCTyR1aV1rApPoEZcg0kH8IGad7DPgrP2fytW6W5.jpg', '2022-05-31 01:11:51', '2022-05-31 01:11:51'),
(14, 'Javascript: Javascript Programming For Absolute Beginners: Ultimate Guide To Javascript Coding,', 'William Sullivan [Sullivan & William]', 'Javascript: Javascript Programming For Absolute Beginners: Ultimate Guide To Javascript Coding', 'Web Development', '7', '/storage/books/9dvbziGQWhx2zFTj7X8WZi8ujUW70dEr1CgXo2CD.jpg', '2022-05-31 01:14:24', '2022-05-31 01:14:24'),
(15, 'Functional Programming in Java: How functional techniques improve your Java programs', 'rupali singh', 'Summary Functional Programming in Java teaches Java developers how to incorporate the most............', 'Java Programming', '4', '/storage/books/iSazdxjtY5NFYwPq74Dq9pLsqQIfqEKvRes2yY3a.jpg', '2022-05-31 01:15:37', '2022-05-31 01:15:37'),
(16, 'Linux For Beginners: The Ultimate Guide To The Linux Operating System & Linux', 'Vardy Adam.', 'To Learning & Mastering LinuxAre You Ready To Learn How To Use, Master & Configure Linux? If So You\'ve', 'Web Development', '1', '/storage/books/zxSB2aYaegqLimOFNLvNciFMBGcn1DS053GR56gV.jpg', '2022-05-31 01:17:28', '2022-05-31 01:17:28'),
(17, 'JAVA: A Beginner\'s Guide to Learning the Basics of Java Programming', 'Patterson James.', 'Essential JAVA Interview Skills-Made Easy! The main objective of this ....', 'Java Programming', '10', '/storage/books/8YCXR33NRXsRBVZ2IeKatILFdNpLjnsp6AuSjfGr.jpg', '2022-05-31 01:18:30', '2022-05-31 01:18:30'),
(18, 'Flask Web Development: Developing Web Applications with Python', 'Miguel Grinberg', 'A thorough introduction to Flask: explore web application development basics with Flask', 'Web Development', '3', '/storage/books/7JSR51bUslO6Glb7ZcBh7sUFqwHheeRFa5xLUq7m.jpg', '2022-05-31 01:19:50', '2022-05-31 01:19:50'),
(19, 'Chaudhary. Introduction to Java Programming: Advanced Features (Core Series) Updated To Java 8', 'Harry H.', 'Write your first code in Java using simple, step-by-step examples that model real-word objects and events, making lea', 'Java Programming', '6', '/storage/books/2RwtEfiyzLvx6myraNoKUHKKLcS9tW5xtyaf7tpA.jpg', '2022-05-31 01:20:40', '2022-05-31 01:20:40'),
(20, 'Beginning Android® Programming with Android Studio', 'J.F. DeMarzio', 'Using Android Studio for Android Development . This book is targeted for the beginning Android', 'Web Development', '2', '/storage/books/5Rl5ZvGMpvDK11HT6WAu3S3NmbrWQcPrRQ48ZNl6.jpg', '2022-05-31 01:23:25', '2022-05-31 01:23:25'),
(21, 'Java: A Beginner’s Guide, Eighth Edition', 'sherly thomas', 'A practical introduction to Java programming—fully revised for long-term support release Java SE 11 Thoroughly up......', 'Java Programming', '4', '/storage/books/XiHzuxegQvfkM2wGbgBIaEGZ0v6FX4ezlaMSrcg1.jpg', '2022-05-31 01:23:54', '2022-05-31 01:23:54'),
(22, 'Essential XML quick reference: a programmer\'s reference to XML, XPath, XSLT, XML Schema, SOAP,', 'Aaron Skonnard & Martin Gudgin', 'This book is for anyone working with today\'s mainstream XML technologies. It was specifically', 'Web Development', '2', '/storage/books/7eDccWt4dfJENN0cHF29l7cPAyJGrKovRwOybfM9.jpg', '2022-05-31 01:32:38', '2022-05-31 01:32:38'),
(23, 'Computer networks', 'Andrew S. Tanenbaum & David J. Wetherall', 'Computer Networks, 5/e is appropriate for Computer Networking or Introduction to Networking courses at both the undergra  ...', 'Networking', '10', '/storage/books/Gij5swbEHaM5DcG965Dr6wTtjxK9qr6kWgyui3bF.jpg', '2022-05-31 01:34:49', '2022-05-31 01:34:49'),
(24, 'Applied Cryptography in .NET and Azure Key Vault: A Practical Guide to Encryption in .NET and .NET Core', 'Stephen Haunts', 'hybrid encryption scheme that will protect your data against breaches. This highly practical book teaches', 'Web Development', '4', '/storage/books/kvcUSvOkPSCW4yVjRaZuzuNF6t6GtHxdZCY9BS3g.jpg', '2022-05-31 01:48:18', '2022-05-31 01:48:18'),
(25, 'Basics of Computer Networking', 'Thomas G. Robertazzi', 'Basics of Computer Networking Thomas G. Robertazzi Stony Brook University September 19, 2011 Basics', 'Networking', '3', '/storage/books/owrYpQNpwgwH8o1PVHiumQtkXym4mtmS6zjO9fTz.jpg', '2022-05-31 01:50:08', '2022-05-31 01:50:08'),
(28, 'Inside Microsoft SQL Server 2008: T-SQL Querying eBook', 'Ben Gan', 'Manager, Query Optimization Team, Microsoft SQL Server that the T-SQL querying book was your last', 'Web Development', '3', '/storage/books/anPTSYvK3zDJRU7754HrmXxOePyv4MnkOI8coahI.jpg', '2022-05-31 01:54:52', '2022-05-31 01:54:52'),
(29, 'Beginning jQuery 2 for ASP.NET Developers: Using jQuery 2 with ASP.NET Web Forms and ASP.NET', 'Bipin Joshi (auth.)', 'of the 10,000 most visited sites on the web. With this sort of popularity, it’s clear that ASP.NET developers', 'Web Development', '2', '/storage/books/YEu9h2m0mTXGF1BovVPRK7dFVqm9xvSXluvSlcra.jpg', '2022-05-31 02:37:41', '2022-05-31 02:37:41'),
(30, 'Linux For Beginners: The Ultimate Guide To The Linux Operating System & Linux', 'Vardy Adam.', 'Operating System & Linux Vardy Adam.  ...', 'Operating System', '4', '/storage/books/PZSBdhTsokqd0SUvaawqjIE73OkaNLzUC5JbjKQl.jpg', '2022-05-31 02:41:54', '2022-05-31 02:41:54'),
(31, 'Data Analytics and Linux Operating System. Beginners Guide to Learn Data Analytics, Predictive Analytics', 'Isaac D. Cody', 'operating system. A complete step-by-step guide in how the Linux command line worksIn Data Analytics, you  ...', 'Operating System', '5', '/storage/books/kpjIwReZLpEpCE5TPUFrvKbW1y3NF6nmjLFTSL5l.jpg', '2022-05-31 02:48:42', '2022-05-31 02:48:42'),
(32, 'ADVANCED DAT A-STRUCTURES & ALGORITHM ANALYSIS', 'Dr. Sukhamay Kundu', 'it determines the data-items computed. − Also, the order in which those  ADVANCED DAT A-STRUCTURES &a  ...', 'Data Structure', '3', '/storage/books/BLt7CbfddF8DxCeoQ4IbUQJmYCv4xkMi2VDiVMQX.jpg', '2022-05-31 02:49:21', '2022-05-31 02:49:21'),
(33, 'Fundamentals Of Computer Networking And Internetworking', 'Dowglas Comer', 'Covers all of networking and internetworking from media to applications . d Design principle', 'Networking', '6', '/storage/books/jtkxKAPaFar3JY4OzjNPTkswRMNm8eTEz1938Z0T.jpg', '2022-05-31 02:55:00', '2022-05-31 02:55:00'),
(34, 'Linux: Linux Command Line, Cover all essential Linux commands. A complete introduction to Linux', 'Ray Yao & Ada R Swift & Ruby C', 'Overview: This book is a beginner’s guide for fast learning Linux commands which are frequently used.', 'Operating System', '10', '/storage/books/FnzEIKhQWUk1u1Q4oxcfUg3u3nlTQ298ntfYxcZh.jpg', '2022-05-31 02:58:18', '2022-05-31 02:58:18'),
(35, 'Linux: Bootcamp, The Crash Course for Understanding the Basics of Linux Operating System Language', 'Maxwell David', 'To Master The Basics Of Linux, this is the book for you.', 'Operating System', '10', '/storage/books/lrSp5Qm8GSYXWFZ72NAB8mwRVEhncb7Dw1kUN6BG.jpg', '2022-05-31 03:03:11', '2022-05-31 03:03:11'),
(36, 'HUU-FA THESIS DAT?', 'Toni Ashlie Foster', 'Ultimately, this thesis states that the internal structure of the PP huu- In the deep structure', 'Data Structure', '49', '/storage/books/zWy9S3Wery6tqGTSZv3iRlTRHYU7whhxUYAzvFRk.jpg', '2022-05-31 03:04:39', '2022-05-31 03:04:39'),
(37, 'Operating System Concepts', 'anonymous', 'feet A Basic Unit of Work from the Viewpoint of. OS. Operating System Concepts', 'Operating System', '10', '/storage/books/9aJWWfbMRBbhqxxEK1MLAJHYGoWRxzJufGmdUYMZ.jpg', '2022-05-31 03:09:14', '2022-05-31 03:09:14'),
(38, 'Computer Networks And Internets', 'Douglas Comer', 'Intermediate System - Intermediate System (IS-IS) 462 . Because programming and experimentation....', 'Networking', '8', '/storage/books/jpXRhNZdEfMHqm2kJhRST2GJaQXhmXe1ApJAxUN3.jpg', '2022-05-31 03:15:23', '2022-05-31 03:15:23'),
(39, 'Word order and information structure in Makhuwa-Enahara', 'Igor Zelenko', 'Dat the point q (or, shortly, s.v.g.). Igor Zelenko. Geometry  Geometry of filtered structures', 'Data Structure', '4', '/storage/books/aUgk5MD6HUZfaCoYkMbcODAwvjj7ODmfyq8upt0L.jpg', '2022-05-31 03:15:39', '2022-05-31 03:15:39'),
(40, 'Linux: The Ultimate Beginners Guide to Linux Operating System', 'Tale & Steve', 'Linux: The Ultimate Beginners Guide to Linux Operating System Tale|Steve  ...', 'Operating System', '10', '/storage/books/FjWaLP9ElNN2cVUK3qBx7HjSF8h5sT2tCbHZNSLe.jpg', '2022-05-31 03:17:14', '2022-05-31 03:17:14'),
(41, 'The Internet Book', 'Douglas Comer', 'created and enjoys teaching undergraduate and graduate courses on computer networks and Internets  ...', 'Networking', '2', '/storage/books/HfQ0kjGDv5pbc5dqZHm99jGkz39BBkdR6hbaDj0v.jpg', '2022-05-31 03:18:04', '2022-05-31 03:18:04'),
(42, 'Word order and information structure in Makhuwa-Enahara', 'anonyms', 'CP complementiser phrase. DAT dative case. DEM demonstrative. DJ disjoint .. in Moma, he  ...', 'Data Structure', '4', '/storage/books/hjxh8tHgLpxPrgOMdZaIE0awdQ3T2wGSfG7N3Ovw.pdf', '2022-05-31 03:19:47', '2022-05-31 03:19:47'),
(43, 'Abused, Confused, and Misused Words. A Writer\'s Guide to Usage, Spelling, Gramm', 'Mary Embree', 'Confused, and Misused Words, an entertaining and informative look at the ever-changing nature  ...', 'Data Structure', '4', '/storage/books/j7pNQj0nsF6RmzUc7wOK1GBfnTqtEN44XzVaDtmq.jpg', '2022-05-31 03:23:45', '2022-05-31 03:23:45'),
(44, 'Windows 10 From Beginner To Expert: A Complete Userguide to Microsoft\'s Intelligent New', 'Goddard N.', 'Use this books and the techniques revealed within to master Microsoft\'s New Windows.', 'Operating System', '10', '/storage/books/pOAdu5miXwDIgjbu2i3duKJpL0rhHVHNxgjuack4.jpg', '2022-05-31 03:23:58', '2022-05-31 03:23:58'),
(45, 'Operating Systems - Computer Networks and Distributed Systems', 'Jürgen Schönwälder', 'Implementation of the 4.4 BSD Operating System. Addison  Operating Systems - Compute  ...', 'Operating System', '15', '/storage/books/kfwAHnlRFjmZmtS3Xg5tPJOYpmXmOXZMfY9tWFqg.jpg', '2022-05-31 03:27:15', '2022-05-31 03:27:15'),
(46, 'Webster\'s Word Power Better English Grammar. Improve Your Written and Spoken English', 'Webster\'s Word Power Better English Grammar. Improve Your Written and Spoken English', 'With questions and answer sections throughout, this book helps you to improve your written and spoken English through un  ...', 'Data Structure', '4', '/storage/books/2nVrGYNlofzwxLxoxFkW2q1f1w0h8lF24IqkXmIF.jpg', '2022-05-31 03:30:51', '2022-05-31 03:30:51'),
(47, 'The Right Word: Correcting Commonly Confused, Misspelled, and Misused Words', 'Elizabeth Morrison', 'Affect or effect?Right, write, or rite?Soul or sole?Two, too, or to?English can certainly be a confusing language, wheth  ...', 'Data Structure', '3', '/storage/books/enVg2d7Y7MQB6Z5KNEseVs0jPMRUbxxb7tTwkiES.jpg', '2022-05-31 03:32:10', '2022-05-31 03:32:10'),
(48, 'The Design of the UNIX Operating System', 'Maurice Bach', 'TROFF formatter operating under the UNIX system on an AT&T 3B20 computer. The Publisher Special  ...', 'Operating System', '13', '/storage/books/vRqBdIMukpRypNsobNpNEoMuMkrQtC0KnMCgJtsO.jpg', '2022-05-31 03:33:18', '2022-05-31 03:33:18'),
(50, 'English Grammar Reference Book: Grammar and Error Correction Guide and Phrasal Verb Book', 'Jacqueline Melvin', 'This book is a three in one - grammar reference guide, error correction and phrasal verb You will find', 'Data Structure', '4', '/storage/books/JvmGNKfPnc0cIq6U8pUVxFmEikVwJVuSr4oeDPlS.jpg', '2022-05-31 03:35:58', '2022-05-31 03:35:58'),
(51, 'Mobile and Wireless Communication Networks', 'Marcelo G. Rubinstein & Guy Pujolle', 'in technology; communication systems; systems modeling and optimization; information systems.....', 'Networking', '4', '/storage/books/ewsEGHnswolyg4fwT8q05iaQK7ODvICKzOIUm9fJ.jpg', '2022-05-31 03:39:39', '2022-05-31 03:39:39'),
(52, 'Operating systems, Embedded systems and Real-time systems', 'Janez Puhan', 'This book covers the basic concepts and principles of operating systems, showing how to apply them to the design and imp  ...', 'Operating System', '13', '/storage/books/AfknZdpzaxpxyaDQ3Xwc9jDipwEATlULaQmuuS3F.jpg', '2022-05-31 03:44:35', '2022-05-31 03:44:35'),
(53, 'JAVA: Easy Java Programming for Beginners, Your Step-By-Step Guide to Learning Java Programming', 'Alvaro Felix', '\"JAVA: Easy Java Programming For Beginners- Your Step-By-Step Guide to Learning Java Program  ...', 'Java Programming', '12', '/storage/books/4nHlwTH5VEznZkQbHcYtl0DtgQNLOaOrPCTOcDeZ.jpg', '2022-05-31 03:46:16', '2022-05-31 03:46:16'),
(54, 'Java: Java Programming For Beginners - A Simple Start to Java Programming', 'Scott Sanderson', 'By a Software EngineerThis Java Programming guide will make it as simple as possible for you to learn the', 'Java Programming', '5', '/storage/books/1dU8iLxLLp4mem9oT0MneTa0REOjmxoYUBrwIGCu.jpg', '2022-05-31 03:49:21', '2022-05-31 03:49:21'),
(55, 'java interview questions: Top 20 java interview programs and answers', 'anonymous', 'Java Interview Question is here to help you through the INTERVIEW process, teaching you what you  ...', 'Java Programming', '10', '/storage/books/MCtZTcBnKyeIkqQ9BNAlmcoWoJMDjvzbPFskDZzr.jpg', '2022-05-31 03:49:53', '2022-05-31 03:49:53'),
(56, 'Java para novatos: Cómo aprender programación orientada a objetos con Java sin', 'A. M. Vozmediano', 'sobre programación ni sobre el lenguaje Java, aunque sí supondremos que conoces Déjame que te lo  ...', 'Java Programming', '5', '/storage/books/fvlUxx8I5h5SN6sQPn1iThOylPbtgAKCQ6Cl1ftf.jpg', '2022-05-31 03:52:09', '2022-05-31 03:52:09'),
(57, 'Learn Java 8 In a Week: A Beginner\'s Guide to Java Programming', 'Rathore Mahavir.', 'Series: Black BookLevel : Absolute beginner in Java.', 'Java Programming', '10', '/storage/books/jASE4N5t5TMDWum3zPGfA5En3EsxLOiP6c2BMq0G.jpg', '2022-05-31 03:54:09', '2022-05-31 03:54:09'),
(58, 'Sams Teach Yourself Java in 21 Days (Covering Java 7 and Android)', 'y Rogers Cadenhead', 'in21 Days Java (Covers Java 7 and Android) SamsTeachYourself Rogers Cadenhead 800 East 96th Street  ...', 'Java Programming', '6', '/storage/books/P9gxhvF8rQXaAYAx6ntcqr8eOucC0lWULAgED7nM.jpg', '2022-05-31 03:56:25', '2022-05-31 03:56:25'),
(59, 'JAVA: A Beginner\'s Guide to Learning the Basics of Java Programming', 'Patterson James.', 'the basics of Java programming. It offers a step-by-step approach filled with many examples and', 'Java Programming', '8', '/storage/books/VTt07xiarNHjsvjFAn4LHuVNZLF2DPgkp2OhtGYe.jpg', '2022-05-31 03:57:21', '2022-05-31 03:57:21'),
(60, 'Java: The Ultimate Guide to Learn Java Programming and Computer Hacking (java f', 'PETER HOFFMAN', 'Java: The Ultimate Guide to Learn Java Programming and Computer Hacking (java for beginners, ja  .', 'Java Programming', '4', '/storage/books/mGPGjaPlFM9fcdAG1s7ruU8tPtDZtymtOsg4be0u.jpg', '2022-05-31 04:01:47', '2022-05-31 04:01:47');

-- --------------------------------------------------------

--
-- Table structure for table `ebooks`
--

CREATE TABLE `ebooks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pages` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bookimg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ebooks`
--

INSERT INTO `ebooks` (`id`, `title`, `author`, `description`, `category`, `size`, `pages`, `image`, `bookimg`, `created_at`, `updated_at`) VALUES
(2, 'Computer networks', 'Andrew S. Tanenbaum & David J. Wetherall', 'Computer Networks, 5/e is appropriate for Computer Networking or Introduction to Networking courses at....', 'Networking', '6.58', '962', '/storage/ebooks/ZaNcWVBAJQXVcuuB5p7ACMr5sLmeW75WHVycI3AG.pdf', '/storage/ebooks image/Ehk9X5FzZBN65F4d8nqbgUSYi7aHG85zYVG6sm5z.jpg', '2022-05-31 01:40:06', '2022-05-31 01:40:06'),
(3, 'How to Hack Computers: how to hack computers, hacking for beginners, penetration testing,', 'Joel Tope', 'Computers: how to hack computers, hacking for beginners, penetration testing, hac  ...', 'Networking', '0.679', '138', '/storage/ebooks/G3QkkDmza9g138QCo36vwumHIcqx1W0iNdNrw5GY.pdf', '/storage/ebooks image/FRGoJd2X8IfFXUPr9R7QIAp0myNjAun88TzWehGa.jpg', '2022-05-31 01:45:57', '2022-05-31 01:45:57'),
(4, 'Java: Java Programming For Beginners - A Simple Start to Java Programming', 'harry thomas', 'By a Software Engineer This Java Programming guide will make it as simple as possible for you to learn the Jav  ...', 'Java Programming', '3.67', '221', '/storage/ebooks/957TWTfW5g4jqwEHqoZUHNyzETx8R64odHnWR2JG.pdf', '/storage/ebooks image/C1fo3YXsRzljm9m3mQmRZVaRDGpL1bUjRLgzDTwp.jpg', '2022-05-31 01:48:06', '2022-05-31 01:48:06'),
(5, 'Basics of Computer Networking', 'Thomas G. Robertazzi', 'Basics of Computer Networking Thomas G. Robertazzi Stony Brook University September 19, 2011 Basics', 'Networking', '0.427', '140', '/storage/ebooks/EzzswP9akNbVYRbNBXmdHAyzoNCBxQwNrrHWjfnc.pdf', '/storage/ebooks image/Arzt64ZFyL8k1OYm33Eq3b5eR75viaEImPEh2Dfq.jpg', '2022-05-31 01:51:43', '2022-05-31 01:51:43'),
(6, 'Learn C# in One Day and Learn It Well: C# for Beginners with Hands-on Project', 'Jamie Chan', 'Learn C# in One Day and Learn It Well: C# for Beginners with Hands-on Project', 'Web Development', '8', '25', '/storage/ebooks/qe9FfLhT3RMYdqxjO4TsvZ4CVdrX2mOOnpbb8DuN.pdf', '/storage/ebooks image/UO6aD7RlG2Za80N3LWK41z9UOCASWw9RDMWZnQkG.jpg', '2022-05-31 02:41:10', '2022-05-31 02:41:10'),
(8, 'HTML & CSS Crash Course: Learn html and css with easy to follow-step-by-step tutorials', 'David McMahon', 'HTML & CSS Crash Course: Learn html and css with easy to follow-step-by-step tutorials', 'Web Development', '5.4', '43', '/storage/ebooks/5PMEGmESLbfpw5WcgY4t8wfjWpkMJ7p5sfSWSYWR.pdf', '/storage/ebooks image/UbNPzn8r5zJRha7HmlKEO02jCTyh4YMjNwjEFP2u.jpg', '2022-05-31 02:45:52', '2022-05-31 02:45:52'),
(10, 'PHP: Learn PHP in 24 Hours or Less - A Beginner\'s Guide To Learning PHP Programming Now', 'Dwight Robert.', 'PHP: Learn PHP in 24 Hours or Less - A Beginner\'s Guide To Learning PHP Programming Now', 'Web Development', '6', '43', '/storage/ebooks/Kwx3uwJlHDUD7DOPiad2GvYcqUi436lucW6QyHnx.pdf', '/storage/ebooks image/S4jYkrRnU2kOUgD5IpQ5DBnpfbIR9U0hJ7tmFnmK.jpg', '2022-05-31 02:47:10', '2022-05-31 02:47:10'),
(11, 'Linux For Beginners: The Ultimate Guide To The Linux Operating System & Linux', 'Vardy Adam.', 'The Ultimate Guide To The Linux Operating System & Linux', 'Web Development', '4.9', '900', '/storage/ebooks/hB7fQYgE1iHeSynsJHjiLcliSXanvqDvCrjV4DzE.pdf', '/storage/ebooks image/QjdBXvC7FoQiPVI71Y1T2N03aNZcuyeG5IOV3H4E.jpg', '2022-05-31 02:51:25', '2022-05-31 02:51:25'),
(12, 'Linux For Beginners: The Ultimate Guide To The Linux Operating System & Linux', 'Vardy Adam', 'Operating System & Linux Vardy Adam.  ...', 'Operating System', '2.11', '87', '/storage/ebooks/pWzNZMr7p6b2chPgTRRh3XszsiyPYmS10upu23MY.pdf', '/storage/ebooks image/pwnKsNqRdkGdQw1fbq9DHSeYEuMKfZwKckQoLcYV.jpg', '2022-05-31 02:51:45', '2022-05-31 02:51:45'),
(13, 'Flask Web Development: Developing Web Applications with Python', 'Miguel Grinberg', 'Flask Web Development: Developing Web Applications with Python', 'Web Development', '4.3', '645', '/storage/ebooks/PetwCEmnLoA4NiNUwLb6qysCasIXXZsmDHjahM0e.pdf', '/storage/ebooks image/bkGpE75IVYwchyDjGtxj571XrZHnUghdf34ABzwg.jpg', '2022-05-31 02:54:27', '2022-05-31 02:54:27'),
(14, 'Data Analytics and Linux Operating System. Beginners Guide to Learn Data Analytics, Predictive Analytics', 'Isaac D. Cody', 'operating system. A complete step-by-step guide in how the Linux command line worksIn Data Analytics,', 'Operating System', '1.05', '119', '/storage/ebooks/eYtwXgbGSnYxWmTbdCkF5woDniXgk3ulpzcEGKMb.pdf', '/storage/ebooks image/FteYkgHnFLmx6gOEuvu1Zw3srJciUoGZyHil4KTA.jpg', '2022-05-31 02:55:29', '2022-05-31 02:55:29'),
(15, 'Essential XML quick reference: a programmer\'s reference to XML, XPath, XSLT, XML Schema, SOAP', 'Aaron Skonnard & Martin Gudgin', 'Essential XML quick reference: a programmer\'s reference to XML, XPath, XSLT, XML Schema, SOAP,', 'Web Development', '3.4', '354', '/storage/ebooks/LcHmYWjTtHmKrbdJ7aotZ3kBZZ7EBGQO2jCD0bY3.pdf', '/storage/ebooks image/OYv89kziBIhjgiCgHXE1mEttgAot7pH78toRGv8O.jpg', '2022-05-31 02:57:31', '2022-05-31 02:57:31'),
(16, 'Beginning Android® Programming with Android Studio', 'J.F. DeMarzio', 'Programming with Android Studio', 'Web Development', '4.5', '567', '/storage/ebooks/p15xGZbXFYy5L0OQLbsIHHk0OFQlfOQPScFO4HiT.pdf', '/storage/ebooks image/eYcjUuAj4c753UWsULPFpkOUW6IHY5pIoDDXWiVW.jpg', '2022-05-31 02:58:22', '2022-05-31 02:58:22'),
(17, 'ADVANCED DAT A-STRUCTURES & ALGORITHM ANALYSIS', 'Dr. Sukhamay Kundu', 'Determines the data-items computed. − Also, the order in which those  ADVANCED DAT A-STRUCTURES', 'Data Structure', '0.917', '154', '/storage/ebooks/nmeJ8IqRCG3AIpq9LM1o9cswNreB2DToOEaYJY36.pdf', '/storage/ebooks image/ptCq5el1O2sYafnzLE3GnFyzVZJgDOFlvtbX49Yh.jpg', '2022-05-31 02:59:32', '2022-05-31 02:59:32'),
(18, 'Applied Cryptography in .NET and Azure Key Vault', 'Stephen Haunts', 'A Practical Guide to Encryption in .NET and .NET Core', 'Web Development', '1.4', '200', '/storage/ebooks/upzr9cSAGDP1QpL7HREIdIuIGEIMjBGRcEVse90G.pdf', '/storage/ebooks image/MIf4MdpEv0nS8gi4lOFSiDV9uQF7pLpn1fXa9io6.jpg', '2022-05-31 02:59:34', '2022-05-31 02:59:34'),
(19, 'Inside Microsoft SQL Server 2008: T-SQL Querying eBook', 'Ben Gan', 'Inside Microsoft SQL Server 2008: T-SQL Querying eBook', 'Web Development', '1.9', '156', '/storage/ebooks/iv1fO4NRnNdK88pl2jj28oHHZhMehPvMhubqENDs.pdf', '/storage/ebooks image/aeguBkM9qMK8dk9Aq4qNkapIS34mtC2RsxijE4sE.jpg', '2022-05-31 03:00:29', '2022-05-31 03:00:29'),
(20, 'Linux: Linux Command Line, Cover all essential Linux commands. A complete introduction to Linux', 'Ray Yao & Ada R Swift & Ruby C', 'Overview: This book is a beginner’s guide for fast learning Linux commands which are frequently used.', 'Operating System', '0.33', '90', '/storage/ebooks/n08qjgeCq1rlOadkcJgAUFqu6cuJVV7OcaebUuyg.pdf', '/storage/ebooks image/EKGIhWewRSYbV0yxo5QPSklevq1cN0lI6rJ9mLkn.jpg', '2022-05-31 03:00:35', '2022-05-31 03:00:35'),
(21, 'Beginning jQuery 2 for ASP.NET Developers', 'Bipin Joshi (auth.)', 'Using jQuery 2 with ASP.NET Web Forms and ASP.NET', 'Web Development', '2', '188', '/storage/ebooks/BEZyB1djzQrzXloJ7atWunZxY9ancvezl8eCOpI4.pdf', '/storage/ebooks image/MeYItOLMH0xLP6tpOaAYVQKT9rHan8tuGguOga8B.jpg', '2022-05-31 03:01:33', '2022-05-31 03:01:33'),
(22, 'Fundamentals Of Computer Networking And Internetworking', 'Douglas Comer', 'Covers all of networking and internetworking from media to applications . d Design principle', 'Networking', '3.26', '942', '/storage/ebooks/Z47ojkMk03JajNIbpg8gEXtJINcBZ6M1Dtut4G20.pdf', '/storage/ebooks image/M3w0uinWZZu354brBOsQtAWZJPmg7GeuoP7eSTgL.jpg', '2022-05-31 03:01:59', '2022-05-31 03:01:59'),
(23, 'Linux: Bootcamp, The Crash Course for Understanding the Basics of Linux Operating System Language', 'Maxwell David.', 'To Master The Basics Of Linux, this is the book for you.', 'Operating System', '1.33', '219', '/storage/ebooks/m2B8Y06rKLYiKwefZ135tCtbmC0htpzkmtMa0Z0b.pdf', '/storage/ebooks image/JprQ86O6Gd1a5GttVQQS6Opz2V16AHZ20pHiRlf0.jpg', '2022-05-31 03:04:46', '2022-05-31 03:04:46'),
(24, 'Operating System Concepts', 'anonymous', 'feet A Basic Unit of Work from the Viewpoint of. OS. Operating System Concepts', 'Operating System', '1.66', '487', '/storage/ebooks/dNJ6QhhWvX7lSQh9Ed5rWOHNM2s5QVCchmXWPV3c.pdf', '/storage/ebooks image/5GNz2ZVjSoyec3e5nhYMMntymi2e0AfzJ7jSROuy.jpg', '2022-05-31 03:07:36', '2022-05-31 03:07:36'),
(25, 'HUU-FA THESIS DAT?', 'Toni Ashlie Foster', 'Ultimately, this thesis states that the internal structure of the PP huu- In the deep structure  .', 'Data Structure', '0.945', '49', '/storage/ebooks/eDSOku9GTv2iI9GWipAcQjPJvx2vRbhD80BLaqgF.pdf', '/storage/ebooks image/6LBOAieCCzfs9h7Emb8cr8QF0OSvIw87W2c8SBTJ.jpg', '2022-05-31 03:08:04', '2022-05-31 03:08:04'),
(26, 'Computer Networks And Internets', 'Douglas Comer', 'Intermediate System - Intermediate System (IS-IS) 462 . Because programming and experimentation...', 'Networking', '3.72', '637', '/storage/ebooks/J5g3eI1juqEN77V5uHN4afTfrvTtFrqHnYdCFTlD.pdf', '/storage/ebooks image/35gMHeEPl5vLt3KFswdLPDT5vzirXc8foswXreNC.jpg', '2022-05-31 03:14:07', '2022-05-31 03:14:07'),
(27, 'Linux: The Ultimate Beginners Guide to Linux Operating System', 'Tale & Steve', 'Linux: The Ultimate Beginners Guide to Linux Operating System Tale|Steve  ...', 'Operating System', '2.29', '107', '/storage/ebooks/4aSxj7unmV3N1n6C6X1KKuXi7patmXbFfg3CwA3L.pdf', '/storage/ebooks image/ZSQ8SLXMLP6EYir8cDnQsaL9OcaGmtizunA2T5v8.jpg', '2022-05-31 03:16:03', '2022-05-31 03:16:03'),
(28, 'Geometry of filtered structures on manifolds: Tanaka\'s prolongation', 'Igor Zelenko', 'Dat the point q (or, shortly, s.v.g.). Igor Zelenko. Geometry  Geometry of filtered structures  ...', 'Data Structure', '1.92', '218', '/storage/ebooks/ScUsB4zRq3YxqY7HzMsaw3eUcIr4RSyrcAexk3R4.pdf', '/storage/ebooks image/YW4PreLM6EDhwOP4k3kZFAEfe3s31CKmn5T6Pweu.jpg', '2022-05-31 03:17:17', '2022-05-31 03:17:17'),
(29, 'Word order and information structure in Makhuwa-Enahara', 'anonyms', 'CP complementiser phrase. DAT dative case. DEM demonstrative. DJ disjoint .. in Moma, he  ...', 'Data Structure', '1.75', '309', '/storage/ebooks/8WBAkCeS1oomJKlT25wdRDGTDcu8wwrQ0v2uDHv5.jpg', '/storage/ebooks image/8m4OzPWCFCmdmobLFlZJ2QRWP5hXgC4bFoJqD5Yp.pdf', '2022-05-31 03:21:55', '2022-05-31 03:21:55'),
(30, 'The Internet Book', 'Douglas Comer', 'created and enjoys teaching undergraduate and graduate courses on computer networks and Internets  ...', 'Networking', '5.9', '405', '/storage/ebooks/93jUgleZ7usyJDTTBzWq3JmCHZ5sDv6mf0wIrTQ1.pdf', '/storage/ebooks image/DTGczOBQtH02iA1ekWkNGdd1hsBOnZbMFaae0RJk.jpg', '2022-05-31 03:25:08', '2022-05-31 03:25:08'),
(31, 'Windows 10 From Beginner To Expert: A Complete Userguide to Microsoft\'s Intelligent New', 'Goddard N.', 'Use this books and the techniques revealed within to master Microsoft\'s New Windows', 'Operating System', '1.18', '126', '/storage/ebooks/DAbVVykV6pOC4I0kTUFOZXQk2yIrd4AjTFhGwg1U.pdf', '/storage/ebooks image/hEUzbGkpmjehxv2uVkLoHFBmzQqcUmqX3iMSFfKx.jpg', '2022-05-31 03:25:09', '2022-05-31 03:25:09'),
(32, 'Abused, Confused, and Misused Words. A Writer\'s Guide to Usage, Spelling, Grammar, and Sentence', 'Mary Embree', 'Confused, and Misused Words, an entertaining and informative look at the ever-changing nature  ...', 'Data Structure', '0.944', '275', '/storage/ebooks/fcHXsPfDiAjV24PtyCHQDCqvyVz5vO9S85fwDQka.pdf', '/storage/ebooks image/Ix8LsddHWA2z5Qa8I0Doi2hCoQHDkGmKMBo8lUOP.jpg', '2022-05-31 03:26:21', '2022-05-31 03:26:21'),
(33, 'Operating Systems - Computer Networks and Distributed Systems', 'Jürgen Schönwälder', 'Implementation of the 4.4 BSD Operating System. Addison  Operating Systems - Compute  ...', 'Operating System', '0.894', '295', '/storage/ebooks/FJaMewyxK6xGuJfVyBTiesGyh459KgdXjmNnREwU.pdf', '/storage/ebooks image/n39nJ7OO5Yn4qMadJ3fRrXNi6Qrr36YyukioI8GX.jpg', '2022-05-31 03:28:21', '2022-05-31 03:28:21'),
(34, 'Webster\'s Word Power Better English Grammar. Improve Your Written and Spoken', 'Betty Kirkpatrick', 'With questions and answer sections throughout, this book helps you to improve your written and spoken English through un  ...', 'Data Structure', '1.54', '347', '/storage/ebooks/ddJRDzcKsr8EnDjdmPUbFmUOAgBTdVdhunvKIVPB.pdf', '/storage/ebooks image/OoTw35CICDY1PILmlM0SUOdnBsunSnffhqln68rZ.jpg', '2022-05-31 03:29:50', '2022-05-31 03:29:50'),
(35, 'The Design of the UNIX Operating System', 'Maurice Bach', 'TROFF formatter operating under the UNIX system on an AT&T 3B20 computer. The Publisher Special  ...', 'Operating System', '12.58', '486', '/storage/ebooks/ioZSmxYM4ugaVI6AsnEoFgXz3x1T3hfNm2on27J6.pdf', '/storage/ebooks image/HRXWkYtML9gMrpY4EkTVMHcG5PGfuYNLMCodOPds.jpg', '2022-05-31 03:32:28', '2022-05-31 03:32:28'),
(36, 'The Right Word: Correcting Commonly Confused, Misspelled, and Misused Words', 'Elizabeth Morrison', 'Affect or effect?Right, write, or rite?Soul or sole?Two, too, or to?English can certainly be a confusing language, wheth  ...', 'Data Structure', '0.811', '168', '/storage/ebooks/6JLg9eqeRkkLlXRJHJ3WRTtOApBvLnzuxoQDEDEL.pdf', '/storage/ebooks image/xYlmQxiqtGMSRdtwZshSXcxIfF7ExlrRm5QyZ6rr.jpg', '2022-05-31 03:34:32', '2022-05-31 03:34:32'),
(37, 'English Grammar Reference Book: Grammar and Error Correction Guide and Phrasal Verb Book', 'Jacqueline Melvin', 'This book is a three in one - grammar reference guide, error correction and phrasal verb You will find', 'Data Structure', '1.85', '330', '/storage/ebooks/Om3rXo4W6Yt3tKZ5H8kKfm43qxXsbiO5pmZXQuy9.pdf', '/storage/ebooks image/CPiuWXOD3GWkCmJDEE9YorF5b3qdH3Rlumig9qKC.jpg', '2022-05-31 03:42:31', '2022-05-31 03:42:31'),
(38, 'Mobile and Wireless Communication Networks', 'Marcelo G. Rubinstein & Guy Pujolle', 'in technology; communication systems; systems modeling and optimization; information systems...', 'Networking', '3.92', '243', '/storage/ebooks/VrAk2PywwEsoVvb6qGgUktV5iRsPXlnwlJDKrZXT.pdf', '/storage/ebooks image/pBVueoXQ0FcbY7mN7MiVjb3Zt0w1i23pz2r5wIEL.jpg', '2022-05-31 03:43:26', '2022-05-31 03:43:26'),
(39, 'Embedded and Real-Time Operating Systems', 'K.C. Wang', 'This book covers the basic concepts and principles of operating systems, showing how to apply them to the design and imp  ...', 'Operating System', '12', '491', '/storage/ebooks/ShRo9wCJ7dkEbmcpOWkJZNgs68T5obTlMNk6Dsq2.pdf', '/storage/ebooks image/tYej0OWlecRF2Rig0XTJc6ESNCtmQzXSNtLyViOe.jpg', '2022-05-31 03:43:36', '2022-05-31 03:43:36'),
(40, 'JAVA: Easy Java Programming for Beginners, Your Step-By-Step Guide to Learning Java Programming', 'Alvaro Felix.', '\"JAVA: Easy Java Programming For Beginners- Your Step-By-Step Guide to Learning Java Program  ...', 'Java Programming', '2.35', '104', '/storage/ebooks/7gipevEJRcnPm2NGCZWS9A34eu73tU7hPyrrvdTt.pdf', '/storage/ebooks image/ALMwuCqqynJw9OvE8KznezdodViDFInZ8C4VBqG4.jpg', '2022-05-31 03:48:12', '2022-05-31 03:48:12'),
(41, 'Java: Java Programming For Beginners - A Simple Start to Java Programming', 'Scott Sanderson', 'By a Software EngineerThis Java Programming guide will make it as simple as possible for you to learn the', 'Java Programming', '0.837', '221', '/storage/ebooks/pccICG9nhSXVBts3I6NoKZdDcaVGYVN9tObnhYf3.pdf', '/storage/ebooks image/av2IhrkNPoLliufS2DCNj8hv3j68agLEqWGTwUrO.jpg', '2022-05-31 03:50:43', '2022-05-31 03:50:43'),
(42, 'java interview questions: Top 20 java interview programs and answers', 'anonymous', 'Java Interview Question is here to help you through the INTERVIEW process, teaching you what you  ...', 'Java Programming', '1.35', '457', '/storage/ebooks/o36WkpL8SvcjGmXyzlpJVoyYa8wGLvcZXy80mXLa.pdf', '/storage/ebooks image/cHSmwXqusVqh9ngcl0lg1Ia7rnYSWXNwjUwIWP7U.jpg', '2022-05-31 03:52:28', '2022-05-31 03:52:28'),
(43, 'Java para novatos: Cómo aprender programación orientada a objetos con Java sin desesperarse', 'A. M. Vozmediano', 'sobre programación ni sobre el lenguaje Java, aunque sí supondremos que conoces Déjame que te lo  ...', 'Java Programming', '2.8', '459', '/storage/ebooks/EMrR0e9sBG7sCusNAZk3Hmvd4WrZisGyTXh0umHa.pdf', '/storage/ebooks image/dQlfgBCuDTgpEpYNI8ZLucZLQPkiYo3Ji7CAnswK.jpg', '2022-05-31 03:54:47', '2022-05-31 03:54:47'),
(44, 'Learn Java 8 In a Week: A Beginner\'s Guide to Java Programming', 'Rathore Mahavir.', 'Series: Black BookLevel : Absolute beginner in Java.', 'Java Programming', '2.42', '107', '/storage/ebooks/Cxq28gtmRf0tdG6t5DSq0auOt8d5lG79qpblkZyJ.pdf', '/storage/ebooks image/aXtAyuHdw3pQPkyXoCHgoibB59dTnAvfI2ods9Q9.jpg', '2022-05-31 03:55:40', '2022-05-31 03:55:40'),
(45, 'Sams Teach Yourself Java in 21 Days (Covering Java 7 and Android)', 'Rogers Cadenhead', 'in21 Days Java (Covers Java 7 and Android) SamsTeachYourself Rogers Cadenhead 800 East 96th Street', 'Java Programming', '0.741', '85', '/storage/ebooks/PTUGxgZNfqt2ILcLTOpYnXVMAk2cpqiGcAberqjw.pdf', '/storage/ebooks image/EhCO7kvrziX9lEVzWpPlZkR1U4HjJtNs73c1H0no.jpg', '2022-05-31 03:58:12', '2022-05-31 03:58:12'),
(46, 'JAVA: A Beginner\'s Guide to Learning the Basics of Java Programming', 'Patterson James.', 'the basics of Java programming. It offers a step-by-step approach filled with many examples and', 'Java Programming', '2.8', '144', '/storage/ebooks/3UeKTIxbtCvLfjGKzN1eqp4iswClKaxniE8rriNv.pdf', '/storage/ebooks image/42EFeIEGdtTNN1R0130NwyQboYoYZe5ScdCYh2VH.jpg', '2022-05-31 03:58:42', '2022-05-31 03:58:42'),
(47, 'Java: The Ultimate Guide to Learn Java Programming and Computer Hacking (java for beginners, java for', 'PETER HOFFMAN', 'Java: The Ultimate Guide to Learn Java Programming and Computer Hacking (java for beginners, ja  ...', 'Java Programming', '1.18', '82', '/storage/ebooks/mvvalNNekPxryHDpuLh6gJnDODMFTq3mMzK3XAH3.pdf', '/storage/ebooks image/WcplTz35svXDLZ3iD5SzQv0y3qHhn8w69hDPLCKV.jpg', '2022-05-31 04:03:04', '2022-05-31 04:03:04');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `issued_books`
--

CREATE TABLE `issued_books` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Waiting',
  `userEmail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userEnrollment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `issued_books`
--

INSERT INTO `issued_books` (`id`, `title`, `author`, `category`, `image`, `status`, `userEmail`, `userEnrollment`, `userName`, `created_at`, `updated_at`) VALUES
(1, 'How to Hack Computers: how to hack computers, hacking for beginners, penetration testing', 'Joel Tope', 'Networking', '/storage/books/LAvTtYcLz33cW7K8ui74fRZAWXIBl95kNlkZPhLP.jpg', 'Issued', '1913007@gpnagpur.ac.in', '1913007', 'Pranay Chavhan', '2022-05-31 13:57:20', '2022-05-31 14:14:20'),
(2, 'AVA: Easy Java Programming for Beginners, Your Step-By-Step Guide to Learning Java Programming', 'Alvaro Felix', 'Java Programming', '/storage/books/7G84Rftq4gTFzlBUcvB3yJFkEx0N3iB6cSE2O1bZ.jpg', 'Waiting', '1913007@gpnagpur.ac.in', '1913007', 'Pranay Chavhan', '2022-05-31 14:20:42', '2022-05-31 14:20:42');

-- --------------------------------------------------------

--
-- Table structure for table `issued_resources`
--

CREATE TABLE `issued_resources` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userEmail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `from` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `to` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `issued_resources`
--

INSERT INTO `issued_resources` (`id`, `userEmail`, `userName`, `image`, `title`, `from`, `to`, `created_at`, `updated_at`) VALUES
(1, '1913007@gpnagpur.ac.in', 'Pranay Chavhan', '/storage/resources/FWz89ixAgYZMHSdYkLB5FOISZEzAyxLRkCHWhrBy.jpg', 'Projector 1', '1:01:21 AM', '2:00:00 AM', '2022-05-31 14:01:48', '2022-05-31 14:01:48');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(78, '2014_10_12_100000_create_password_resets_table', 1),
(79, '2019_08_19_000000_create_failed_jobs_table', 1),
(80, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(81, '2022_03_11_203121_create_books_table', 1),
(82, '2022_03_15_143841_create_ebooks_table', 1),
(83, '2022_04_19_164457_create_wishlists_table', 1),
(84, '2022_04_23_053535_create_issued_books_table', 1),
(85, '2022_04_23_145242_create_accept_books_table', 1),
(86, '2022_04_24_051832_create_resources_table', 1),
(87, '2022_04_24_062705_create_teachers_table', 1),
(88, '2022_05_18_122046_create_waiting_list_controllers_table', 1),
(89, '2022_05_19_180429_create_issued_resources_table', 1),
(91, '2014_10_12_000000_create_users_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `resources`
--

CREATE TABLE `resources` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `resources`
--

INSERT INTO `resources` (`id`, `title`, `description`, `image`, `created_at`, `updated_at`) VALUES
(2, 'Projector 1', 'Hardware lab Projector', '/storage/resources/FWz89ixAgYZMHSdYkLB5FOISZEzAyxLRkCHWhrBy.jpg', '2022-05-31 04:03:47', '2022-05-31 04:03:47'),
(3, 'AV Room', 'To Attend Meetings, Inauguration and other Events', '/storage/resources/WveqdodWP5QGfIP7RwUQULdM97owJez0ZtPsW9MH.jpg', '2022-05-31 04:07:15', '2022-05-31 04:07:15');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `teacher_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `teacherImg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enrollment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userImg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `enrollment`, `email`, `email_verified_at`, `password`, `contact`, `address`, `department`, `year`, `userImg`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Pranay Chavhan', '1913007', '1913007@gpnagpur.ac.in', NULL, 'Pass@123', '7774860123', 'Boys Hostel, GP Nagpur, Sadar', 'CM', '3rd Year', 'https://drive.google.com/file/d/1hlIi5X5OfiHyEo809oxpc6jLbyofc3l6', NULL, '2022-05-31 13:09:55', '2022-05-31 13:09:55');

-- --------------------------------------------------------

--
-- Table structure for table `waiting_list_controllers`
--

CREATE TABLE `waiting_list_controllers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Waiting',
  `userEmail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userEnrollment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userEmail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userEnrollment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wishlists`
--

INSERT INTO `wishlists` (`id`, `title`, `author`, `category`, `image`, `userEmail`, `userEnrollment`, `userName`, `created_at`, `updated_at`) VALUES
(8, 'HTML & CSS Crash Course: Learn html and css with easy to follow-step-by-step tutorials', 'David McMahon', 'Web Development', '/storage/books/1aC4Oqpad2wdgENCz4dCuYT8r6n5tf4sU1FOanKV.jpg', '1913007@gpnagpur.ac.in', '1913007', 'Pranay Chavhan', '2022-05-31 13:59:49', '2022-05-31 13:59:49'),
(9, 'Java: A Beginner’s Guide, Eighth Edition', 'sherly thomas', 'Java Programming', '/storage/books/XiHzuxegQvfkM2wGbgBIaEGZ0v6FX4ezlaMSrcg1.jpg', '1913007@gpnagpur.ac.in', '1913007', 'Pranay Chavhan', '2022-05-31 14:00:07', '2022-05-31 14:00:07'),
(10, 'JAVA: A Beginner\'s Guide to Learning the Basics of Java Programming', 'Patterson James.', 'Java Programming', '/storage/books/VTt07xiarNHjsvjFAn4LHuVNZLF2DPgkp2OhtGYe.jpg', '1913007@gpnagpur.ac.in', '1913007', 'Pranay Chavhan', '2022-05-31 14:00:23', '2022-05-31 14:00:23'),
(11, 'java interview questions: Top 20 java interview programs and answers', 'anonymous', 'Java Programming', '/storage/books/MCtZTcBnKyeIkqQ9BNAlmcoWoJMDjvzbPFskDZzr.jpg', '1913007@gpnagpur.ac.in', '1913007', 'Pranay Chavhan', '2022-05-31 14:00:26', '2022-05-31 14:00:26'),
(12, 'Linux: Linux Command Line, Cover all essential Linux commands. A complete introduction to Linux', 'Ray Yao & Ada R Swift & Ruby C', 'Operating System', '/storage/books/FnzEIKhQWUk1u1Q4oxcfUg3u3nlTQ298ntfYxcZh.jpg', '1913007@gpnagpur.ac.in', '1913007', 'Pranay Chavhan', '2022-05-31 14:00:33', '2022-05-31 14:00:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accept_books`
--
ALTER TABLE `accept_books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ebooks`
--
ALTER TABLE `ebooks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `issued_books`
--
ALTER TABLE `issued_books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `issued_resources`
--
ALTER TABLE `issued_resources`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `resources`
--
ALTER TABLE `resources`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `waiting_list_controllers`
--
ALTER TABLE `waiting_list_controllers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accept_books`
--
ALTER TABLE `accept_books`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `ebooks`
--
ALTER TABLE `ebooks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `issued_books`
--
ALTER TABLE `issued_books`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `issued_resources`
--
ALTER TABLE `issued_resources`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `resources`
--
ALTER TABLE `resources`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `waiting_list_controllers`
--
ALTER TABLE `waiting_list_controllers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wishlists`
--
ALTER TABLE `wishlists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
