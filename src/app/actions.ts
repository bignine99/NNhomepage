'use server';

import nodemailer from 'nodemailer';

type ContactEmailPayload = {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
};

type ContactEmailResult = {
    success: boolean;
    message: string;
};

let cachedTransporter: nodemailer.Transporter | null = null;

function getTransporter() {
    if (cachedTransporter) {
        return cachedTransporter;
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
        throw new Error('SMTP 환경변수가 설정되지 않았습니다.');
    }

    cachedTransporter = nodemailer.createTransport({
        host,
        port,
        secure: process.env.SMTP_SECURE === 'true' || port === 465,
        auth: {
            user,
            pass,
        },
    });

    return cachedTransporter;
}

export async function getAiRecommendations(description: string) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock response based on description keywords
    const keywords = description.toLowerCase();
    let recommendations = [
        "건설 공사비 분석 보고서 (2024)",
        "친환경 건축 자재 가이드라인",
        "유사 프로젝트 사례 분석",
        "예상 공기 산정표",
    ];

    if (keywords.includes("안전")) {
        recommendations.push("건설 현장 안전 관리 매뉴얼");
        recommendations.push("최근 5년 안전 사고 사례집");
    }

    if (keywords.includes("비용") || keywords.includes("예산")) {
        recommendations.push("공종별 표준 단가표");
        recommendations.push("원가 절감 방안 제안서");
    }

    return {
        recommendations,
    };
}

export async function sendContactEmail(data: ContactEmailPayload): Promise<ContactEmailResult> {
    try {
        // 필수 필드 검증
        if (!data.name || !data.email || !data.message) {
            return {
                success: false,
                message: '필수 입력 항목이 누락되었습니다. 이름, 이메일, 문의 내용을 모두 입력해주세요.',
            };
        }

        const transporter = getTransporter();
        const to = process.env.CONTACT_TO || 'bignine99@gmail.com';
        const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;

        if (!fromAddress) {
            throw new Error('보내는 이메일 주소가 설정되지 않았습니다.');
        }

        // 타입 가드 후에는 필수 필드가 보장됨
        const name = data.name;
        const email = data.email;
        const message = data.message;
        const company = data.company;

        const subject = `[홈페이지 문의] ${company ? `[${company}] ` : ''}${name}님 문의`;
        const plainBody = [
            `이름: ${name}`,
            `이메일: ${email}`,
            `회사명: ${company || '미기재'}`,
            '',
            '문의 내용:',
            message,
        ].join('\n');

        const htmlBody = `
            <h2>새로운 홈페이지 문의가 도착했습니다.</h2>
            <p><strong>이름:</strong> ${name}</p>
            <p><strong>이메일:</strong> ${email}</p>
            <p><strong>회사명:</strong> ${company || '미기재'}</p>
            <hr />
            <p>${message.replace(/\n/g, '<br />')}</p>
        `;

        await transporter.sendMail({
            from: fromAddress,
            to,
            subject,
            text: plainBody,
            html: htmlBody,
            replyTo: email,
        });

        return {
            success: true,
            message: '문의가 정상적으로 접수되었습니다.',
        };
    } catch (error) {
        console.error('sendContactEmail error', error);
        return {
            success: false,
            message: '메일 발송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
        };
    }
}
