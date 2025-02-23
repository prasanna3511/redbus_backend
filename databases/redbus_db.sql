--
-- PostgreSQL database dump
--

-- Dumped from database version 14.15 (Ubuntu 14.15-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.15 (Ubuntu 14.15-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: addvehicle; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.addvehicle (
    id integer NOT NULL,
    seats_count integer NOT NULL,
    luggage_count integer,
    bus_no text NOT NULL,
    category text,
    type text
);


ALTER TABLE public.addvehicle OWNER TO postgres;

--
-- Name: addvehicle_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.addvehicle_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.addvehicle_id_seq OWNER TO postgres;

--
-- Name: addvehicle_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.addvehicle_id_seq OWNED BY public.addvehicle.id;


--
-- Name: createtrip; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.createtrip (
    id integer NOT NULL,
    fromlocation text NOT NULL,
    tolocation text NOT NULL,
    startdate date NOT NULL,
    enddate date NOT NULL,
    starttime time without time zone NOT NULL,
    endtime time without time zone NOT NULL,
    price text NOT NULL,
    type text NOT NULL
);


ALTER TABLE public.createtrip OWNER TO postgres;

--
-- Name: createtrip_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.createtrip_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.createtrip_id_seq OWNER TO postgres;

--
-- Name: createtrip_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.createtrip_id_seq OWNED BY public.createtrip.id;


--
-- Name: trip; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.trip (
    id integer NOT NULL,
    from_location character varying(255) NOT NULL,
    to_location character varying(255) NOT NULL,
    bus_id integer NOT NULL,
    start_time time without time zone NOT NULL,
    end_time time without time zone NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL
);


ALTER TABLE public.trip OWNER TO postgres;

--
-- Name: trip_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.trip_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.trip_id_seq OWNER TO postgres;

--
-- Name: trip_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.trip_id_seq OWNED BY public.trip.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(150) NOT NULL,
    status character varying(50) DEFAULT 'active'::character varying,
    password text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: addvehicle id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.addvehicle ALTER COLUMN id SET DEFAULT nextval('public.addvehicle_id_seq'::regclass);


--
-- Name: createtrip id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.createtrip ALTER COLUMN id SET DEFAULT nextval('public.createtrip_id_seq'::regclass);


--
-- Name: trip id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trip ALTER COLUMN id SET DEFAULT nextval('public.trip_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: addvehicle; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.addvehicle (id, seats_count, luggage_count, bus_no, category, type) FROM stdin;
\.


--
-- Data for Name: createtrip; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.createtrip (id, fromlocation, tolocation, startdate, enddate, starttime, endtime, price, type) FROM stdin;
\.


--
-- Data for Name: trip; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.trip (id, from_location, to_location, bus_id, start_time, end_time, start_date, end_date) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, status, password) FROM stdin;
4	test	prasanna@3511	active	123456
\.


--
-- Name: addvehicle_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.addvehicle_id_seq', 1, false);


--
-- Name: createtrip_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.createtrip_id_seq', 1, false);


--
-- Name: trip_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.trip_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: addvehicle addvehicle_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.addvehicle
    ADD CONSTRAINT addvehicle_pkey PRIMARY KEY (id);


--
-- Name: createtrip createtrip_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.createtrip
    ADD CONSTRAINT createtrip_pkey PRIMARY KEY (id);


--
-- Name: trip trip_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trip
    ADD CONSTRAINT trip_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

