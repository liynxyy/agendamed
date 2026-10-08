/* =========================================================
   BANCO DE DADOS - TCC AGENDAMED
   Versão final para o projeto
   ========================================================= */

CREATE DATABASE TCC_AGENDAMED;
GO

USE TCC_AGENDAMED;
GO


/* =========================================================
   TABELA: PACIENTE
   ========================================================= */

CREATE TABLE PACIENTE (
    ID_PACIENTE INT PRIMARY KEY IDENTITY(1,1),
    NOME VARCHAR(100) NOT NULL,
    CPF VARCHAR(14) NULL,
    TELEFONE VARCHAR(15) NULL,
    EMAIL VARCHAR(100) NOT NULL UNIQUE,
    SENHA VARCHAR(100) NOT NULL
);
GO


/* =========================================================
   TABELA: MEDICO
   ========================================================= */

CREATE TABLE MEDICO (
    ID_MEDICO INT PRIMARY KEY IDENTITY(1,1),
    NOME VARCHAR(100) NOT NULL,
    ESPECIALIDADE VARCHAR(100) NOT NULL,
    CRM VARCHAR(6) NOT NULL,
    TELEFONE VARCHAR(15) NULL,
    EMAIL VARCHAR(100) NOT NULL UNIQUE,
    SENHA VARCHAR(100) NOT NULL
);
GO


/* =========================================================
   TABELA: RECEPCIONISTA
   ========================================================= */

CREATE TABLE RECEPCIONISTA (
    ID_RECEPCIONISTA INT PRIMARY KEY IDENTITY(1,1),
    NOME VARCHAR(100) NOT NULL,
    CPF VARCHAR(14) UNIQUE,
    TELEFONE VARCHAR(15),
    EMAIL VARCHAR(100) NOT NULL UNIQUE,
    SENHA VARCHAR(100) NOT NULL
);
GO


/* =========================================================
   TABELA: CONSULTA
   ========================================================= */

CREATE TABLE CONSULTA (
    ID INT PRIMARY KEY IDENTITY(1,1),
    DATA DATE NOT NULL,
    HORA TIME NOT NULL,

    ID_PACIENTE INT NOT NULL,
    ID_MEDICO INT NOT NULL,
    ID_RECEPCIONISTA INT NOT NULL,

    STATUS VARCHAR(20) NOT NULL DEFAULT 'Agendada',

    CONSTRAINT FK_CONSULTA_PACIENTE
        FOREIGN KEY (ID_PACIENTE)
        REFERENCES PACIENTE(ID_PACIENTE),

    CONSTRAINT FK_CONSULTA_MEDICO
        FOREIGN KEY (ID_MEDICO)
        REFERENCES MEDICO(ID_MEDICO),

    CONSTRAINT FK_CONSULTA_RECEPCIONISTA
        FOREIGN KEY (ID_RECEPCIONISTA)
        REFERENCES RECEPCIONISTA(ID_RECEPCIONISTA)
);
GO


/* =========================================================
   DADOS INICIAIS - PACIENTES
   ========================================================= */

INSERT INTO PACIENTE
    (NOME, CPF, TELEFONE, EMAIL, SENHA)
VALUES
    ('Sabrina Alves', '332567899-20', '11 23444-2345',
     'SabrinaA@gmail.com', '123456'),

    ('Jose Nunes', '987655488-12', '11 98712-3333',
     'JoseNunes@gmail.com', '123456');
GO


/* =========================================================
   DADOS INICIAIS - MÉDICOS
   ========================================================= */

INSERT INTO MEDICO
    (NOME, ESPECIALIDADE, CRM, TELEFONE, EMAIL, SENHA)
VALUES
    ('Fernando Santos', 'Clinico Geral', '234567',
     '11 98448-9876', 'FernandoS@gmail.com', '123456'),

    ('Bruna Dante', 'Odontologia', '543054',
     '11 23454-6666', 'DanteBruna@gmail.com', '123456');
GO


/* =========================================================
   DADOS INICIAIS - RECEPCIONISTAS
   ========================================================= */

INSERT INTO RECEPCIONISTA
    (NOME, CPF, TELEFONE, EMAIL, SENHA)
VALUES
    ('Brenda Buarque', '123432176-27', '11 23419-9999',
     'brenda@gmail.com', 'Rc1304'),

    ('Tifany Alves', '987569476-20', '11 43756-2134',
     'tifany@gmail.com', 'RcTf3#');
GO


/* =========================================================
   DADOS INICIAIS - CONSULTAS
   ========================================================= */

INSERT INTO CONSULTA
    (DATA, HORA, ID_PACIENTE, ID_MEDICO, ID_RECEPCIONISTA, STATUS)
VALUES
    ('2026-10-11', '14:00', 1, 1, 1, 'Agendada'),

    ('2026-12-01', '09:30', 2, 2, 1, 'Agendada');
GO


/* =========================================================
   CONSULTAS DE TESTE
   ========================================================= */

SELECT * FROM PACIENTE;
SELECT * FROM MEDICO;
SELECT * FROM RECEPCIONISTA;
SELECT * FROM CONSULTA;
GO

/* =========================================================
   SELECTS
   ========================================================= */

/* 1. Listar todos os pacientes */
SELECT
    ID_PACIENTE,
    NOME,
    CPF,
    TELEFONE,
    EMAIL
FROM PACIENTE;
GO


/* 2. Listar todos os médicos */
SELECT
    ID_MEDICO,
    NOME,
    ESPECIALIDADE,
    CRM,
    TELEFONE,
    EMAIL
FROM MEDICO;
GO


/* 3. Listar todos os recepcionistas */
SELECT
    ID_RECEPCIONISTA,
    NOME,
    CPF,
    TELEFONE,
    EMAIL
FROM RECEPCIONISTA;
GO


/* 4. Listar todas as consultas com paciente, médico e recepcionista */
SELECT
    C.ID AS ID_CONSULTA,
    P.NOME AS PACIENTE,
    M.NOME AS MEDICO,
    M.ESPECIALIDADE,
    R.NOME AS RECEPCIONISTA,
    C.DATA,
    C.HORA,
    C.STATUS
FROM CONSULTA C
INNER JOIN PACIENTE P
    ON C.ID_PACIENTE = P.ID_PACIENTE
INNER JOIN MEDICO M
    ON C.ID_MEDICO = M.ID_MEDICO
INNER JOIN RECEPCIONISTA R
    ON C.ID_RECEPCIONISTA = R.ID_RECEPCIONISTA;
GO


/* 5. Consultas que estão agendadas */
SELECT
    C.ID AS ID_CONSULTA,
    P.NOME AS PACIENTE,
    M.NOME AS MEDICO,
    C.DATA,
    C.HORA
FROM CONSULTA C
INNER JOIN PACIENTE P
    ON C.ID_PACIENTE = P.ID_PACIENTE
INNER JOIN MEDICO M
    ON C.ID_MEDICO = M.ID_MEDICO
WHERE C.STATUS = 'Agendada';
GO


/* 6. Consultas de cada paciente */
SELECT
    P.NOME AS PACIENTE,
    M.NOME AS MEDICO,
    M.ESPECIALIDADE,
    C.DATA,
    C.HORA,
    C.STATUS
FROM CONSULTA C
INNER JOIN PACIENTE P
    ON C.ID_PACIENTE = P.ID_PACIENTE
INNER JOIN MEDICO M
    ON C.ID_MEDICO = M.ID_MEDICO
ORDER BY P.NOME;
GO


/* 7. Consultas de cada médico */
SELECT
    M.NOME AS MEDICO,
    M.ESPECIALIDADE,
    P.NOME AS PACIENTE,
    C.DATA,
    C.HORA,
    C.STATUS
FROM CONSULTA C
INNER JOIN MEDICO M
    ON C.ID_MEDICO = M.ID_MEDICO
INNER JOIN PACIENTE P
    ON C.ID_PACIENTE = P.ID_PACIENTE
ORDER BY M.NOME, C.DATA, C.HORA;
GO


/* 8. Consultas realizadas por uma recepcionista */
SELECT
    R.NOME AS RECEPCIONISTA,
    P.NOME AS PACIENTE,
    M.NOME AS MEDICO,
    C.DATA,
    C.HORA,
    C.STATUS
FROM CONSULTA C
INNER JOIN RECEPCIONISTA R
    ON C.ID_RECEPCIONISTA = R.ID_RECEPCIONISTA
INNER JOIN PACIENTE P
    ON C.ID_PACIENTE = P.ID_PACIENTE
INNER JOIN MEDICO M
    ON C.ID_MEDICO = M.ID_MEDICO
ORDER BY R.NOME;
GO


/* 9. Consultas canceladas */
SELECT
    C.ID AS ID_CONSULTA,
    P.NOME AS PACIENTE,
    M.NOME AS MEDICO,
    C.DATA,
    C.HORA,
    C.STATUS
FROM CONSULTA C
INNER JOIN PACIENTE P
    ON C.ID_PACIENTE = P.ID_PACIENTE
INNER JOIN MEDICO M
    ON C.ID_MEDICO = M.ID_MEDICO
WHERE C.STATUS = 'Cancelada';
GO


/* 10. Consultas concluídas */
SELECT
    C.ID AS ID_CONSULTA,
    P.NOME AS PACIENTE,
    M.NOME AS MEDICO,
    C.DATA,
    C.HORA,
    C.STATUS
FROM CONSULTA C
INNER JOIN PACIENTE P
    ON C.ID_PACIENTE = P.ID_PACIENTE
INNER JOIN MEDICO M
    ON C.ID_MEDICO = M.ID_MEDICO
WHERE C.STATUS = 'Concluída';
GO