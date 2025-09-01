'use client';

import { cn } from '@/lib/utils';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  location?: string;
  socialLinks?: { platform: 'github' | 'twitter' | 'linkedin'; url: string }[];
}

interface TeamProps {
  title?: string;
  subtitle?: string;
  members: TeamMember[];
  className?: string;
}

export default function Team1({
  title = 'Meet Our Team',
  subtitle = "We're a diverse group of passionate individuals working together to build amazing products.",
  members,
  className,
}: TeamProps) {
  return (
    <section className={cn('mx-auto max-w-7xl py-12 md:py-16 relative', className)}>
      <div className="bg-primary/15 absolute top-0 left-0 h-72 w-72 rounded-full blur-3xl" />
      <div className="bg-primary/15 absolute top-0 right-0 h-72 w-72 rounded-full blur-3xl" />
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-stretch">
          {members.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group bg-card h-[480px] w-full overflow-hidden rounded-xl shadow-sm transition-opacity hover:opacity-90">
      <div className="relative h-[320px] w-full overflow-hidden">
        <img
          src={member.imageUrl}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover object-[50%_30%]"
        />
      </div>

      <div className="flex h-[160px] flex-col p-4">
        {member.location && (
          <div className="text-muted-foreground mb-1 flex items-center text-xs">
            <div className="bg-primary mr-1.5 h-1.5 w-1.5 rounded-full" />
            {member.location}
          </div>
        )}

        <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
        <p className="text-primary mb-2 text-sm font-medium">{member.role}</p>
        <div className="mb-2">
          <p className="text-muted-foreground text-sm line-clamp-2">{member.bio}</p>
        </div>
        <div className="mt-auto">
          {member.socialLinks && (
            <div className="flex space-x-3">
              {member.socialLinks.map((link) => (
                <Link
                  prefetch={false}
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full transition-all"
                >
                  {link.platform === 'github' && (
                    <Github className="h-4 w-4" />
                  )}
                  {link.platform === 'twitter' && (
                    <Twitter className="h-4 w-4" />
                  )}
                  {link.platform === 'linkedin' && (
                    <Linkedin className="h-4 w-4" />
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
