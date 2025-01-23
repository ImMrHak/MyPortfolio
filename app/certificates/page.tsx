'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Star } from 'lucide-react'
import { BackButton } from '@/components/BackButton'
import { AnimatedCard } from '@/components/ui/animated-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getImagePath } from '@/lib/image-path'

interface Certificate {
  title: string
  organization: string
  issueDate: string
  credentialId?: string
  skills?: string[]
  logo: string
  url?: string
  starred?: boolean
}

const certificates: Certificate[] = [
  {
    title: 'Oracle Certified Professional: Java SE 17 Developer',
    organization: 'Oracle',
    issueDate: 'Nov 2024',
    skills: ['Java'],
    logo: '/logos/oracle.svg',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=7E6C052C622BE0D82C6EAD8E3BABD028B85188C745F021423254C712A4EBD6D2',
    starred: true
  },
  {
    title: 'Oracle Database Administration 2019 Certified Professional',
    organization: 'Oracle',
    issueDate: 'Dec 2024',
    skills: ['Administration'],
    logo: '/logos/oracle.svg',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=53CA278384F4116D652FD5030A57202DA8255F4601A3B582357FE30B9DD201BC',
    starred: true
  },
  {
    title: 'Building Scalable Java Microservices with Spring Boot and Spring Cloud',
    organization: 'Google',
    issueDate: 'Dec 2024',
    credentialId: 'Z476QYXBA0KR',
    skills: ['Eureka Server ', 'Config Server', 'Reactive Api Gateway'],
    logo: '/logos/google.svg',
    url: 'https://www.coursera.org/account/accomplishments/verify/Z476QYXBA0KR',
    starred: true
  },
  {
    title: 'Software Engineering Specialization',
    organization: 'The Hong Kong University of Science and Technology',
    issueDate: 'Oct 2024',
    credentialId: 'HWF899UXTNYA',
    skills: ['Unified Modeling Language (UML)', 'Software Testing', 'Systems Engineering', 'Systems Design', 'Project Planning', 'Project Management'],
    logo: '/logos/hkust.svg',
    url: 'https://www.coursera.org/account/accomplishments/specialization/HWF899UXTNYA',
    starred: true
  },
  {
    title: 'Unix and Bash for Beginners Specialization',
    organization: 'Codio',
    issueDate: 'Oct 2024',
    credentialId: 'YC5ZOSROZY8I',
    skills: ['Unix Administration', 'Bash'],
    logo: '/logos/codio.svg',
    url: 'https://www.coursera.org/account/accomplishments/specialization/YC5ZOSROZY8I',
    starred: true
  },
  {
    title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
    organization: 'IBM',
    issueDate: 'May 2024',
    credentialId: 'CNW8JP249ZWJ',
    skills: ['Docker', 'Kubernetes', 'Containerization'],
    url: 'https://www.coursera.org/account/accomplishments/records/CNW8JP249ZWJ',
    logo: '/logos/ibm.svg'
  },
  {
    title: 'React Native',
    organization: 'Meta',
    issueDate: 'May 2024',
    credentialId: 'JCE7YQA3S5SV',
    skills: ['React.js', 'JavaScript', 'TypeScript'],
    url: 'https://www.coursera.org/account/accomplishments/verify/JCE7YQA3S5SV',
    logo: '/logos/meta.svg'
  },
  {
    title: 'Introduction to Git and GitHub',
    organization: 'Google',
    issueDate: 'Apr 2024',
    credentialId: '2D8D7NNS9GNQ',
    skills: ['Git', 'GitHub', 'Gitlab'],
    url: 'https://www.coursera.org/account/accomplishments/records/2D8D7NNS9GNQ',
    logo: '/logos/google.svg'
  },
  {
    title: 'Virtual Networks in Azure',
    organization: 'Whizlabs',
    issueDate: 'Apr 2024',
    credentialId: 'GS75KLL7EFU8',
    skills: ['Microsoft Azure', 'Domain Name System (DNS)', 'Virtual Networks'],
    url: 'https://www.coursera.org/account/accomplishments/records/GS75KLL7EFU8',
    logo: '/logos/whizlabs.svg'
  },
  {
    title: 'React Basics',
    organization: 'Meta',
    issueDate: 'Feb 2024',
    credentialId: 'L96ACGHNTD2E',
    skills: ['Front-End Development'],
    url: 'https://www.coursera.org/account/accomplishments/verify/L96ACGHNTD2E',
    logo: '/logos/meta.svg'
  },
  {
    title: 'Python for Everybody Specialization',
    organization: 'University of Michigan',
    issueDate: 'Apr 2023',
    credentialId: 'A55NKYMSN52H',
    skills: ['Python (Programming Language)', 'Data Structures', 'Data Scraping', 'Data Visualization'],
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/A55NKYMSN52H',
    logo: '/logos/michigan.svg'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

export default function CertificatesPage() {
  const starredCertificates = certificates.filter(cert => cert.starred)
  const otherCertificates = certificates.filter(cert => !cert.starred)

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="relative pt-16">
          <div className="relative space-y-2">
            <BackButton />
            <h1 className="text-3xl font-bold">Certificates</h1>
            <p className="text-muted-foreground">
              My professional certifications and achievements.
            </p>
          </div>
        </div>

        {starredCertificates.length > 0 && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.h2 
              variants={item}
              className="text-2xl font-semibold flex items-center gap-2"
            >
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Featured Certificates
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {starredCertificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  variants={item}
                  className="group"
                >
                  <Card className="h-full backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5 shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-500">
                              {cert.title}
                            </CardTitle>
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 flex-shrink-0 animate-pulse" />
                          </div>
                          <CardDescription className="text-base font-medium">
                            <span className="text-primary group-hover:text-yellow-400 transition-colors duration-500">
                              {cert.organization}
                            </span>
                            <span className="mx-2 text-primary/50">•</span>
                            <span className="text-primary/80">{cert.issueDate}</span>
                          </CardDescription>
                        </div>
                        <div className="relative h-14 w-14 rounded-xl overflow-hidden group-hover:scale-110 transition-all duration-500 shadow-lg">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-yellow-400/10 group-hover:to-orange-400/5 transition-all duration-500" />
                          <div className="absolute inset-0 backdrop-blur-[2px]" />
                          <img
                            src={getImagePath(cert.logo)}
                            alt={`${cert.organization} logo`}
                            className="h-full w-full object-contain p-2.5 relative z-10 dark:brightness-200 dark:contrast-125 transition-all duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = getImagePath('/logos/default.svg');
                            }}
                          />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {cert.credentialId && (
                          <div className="text-sm backdrop-blur-sm bg-primary/5 rounded-lg p-3 border border-primary/10 group-hover:border-yellow-400/10 transition-all duration-500">
                            <span className="font-semibold text-primary/80">ID: </span>
                            <span className="font-mono text-primary/70">{cert.credentialId}</span>
                          </div>
                        )}
                        {cert.skills && cert.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <Badge 
                                key={skill} 
                                variant="secondary"
                                className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 transition-all duration-300 hover:scale-105 group-hover:bg-yellow-400/10 group-hover:border-yellow-400/20 group-hover:text-yellow-400"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <Button
                          variant="outline"
                          className="w-full bg-gradient-to-r from-primary/10 to-primary/5 hover:from-yellow-400/20 hover:to-orange-400/20 backdrop-blur-sm border-primary/10 hover:border-yellow-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg group/button"
                          onClick={() => cert.url && window.open(cert.url, '_blank')}
                        >
                          <span className="bg-gradient-to-r from-primary to-primary/70 group-hover:from-yellow-400 group-hover:to-orange-400 bg-clip-text text-transparent transition-all duration-500">
                            View Certificate
                          </span>
                          <ExternalLink className="ml-2 h-4 w-4 text-primary group-hover:text-yellow-400 transition-colors duration-500" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {otherCertificates.length > 0 && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.h2 
              variants={item}
              className="text-2xl font-semibold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
            >
              Other Certificates
            </motion.h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherCertificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  variants={item}
                  className="group"
                >
                  <Card className="h-full backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5 shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                            {cert.title}
                          </CardTitle>
                          <CardDescription className="text-base font-medium">
                            <span className="text-primary">
                              {cert.organization}
                            </span>
                            <span className="mx-2 text-primary/50">•</span>
                            <span className="text-primary/80">{cert.issueDate}</span>
                          </CardDescription>
                        </div>
                        <div className="relative h-14 w-14 rounded-xl overflow-hidden group-hover:scale-110 transition-all duration-500 shadow-lg">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500" />
                          <div className="absolute inset-0 backdrop-blur-[2px]" />
                          <img
                            src={getImagePath(cert.logo)}
                            alt={`${cert.organization} logo`}
                            className="h-full w-full object-contain p-2.5 relative z-10 dark:brightness-200 dark:contrast-125 transition-all duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = getImagePath('/logos/default.svg');
                            }}
                          />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {cert.credentialId && (
                          <div className="text-sm backdrop-blur-sm bg-primary/5 rounded-lg p-3 border border-primary/10 group-hover:border-primary/20 transition-all duration-500">
                            <span className="font-semibold text-primary/80">ID: </span>
                            <span className="font-mono text-primary/70">{cert.credentialId}</span>
                          </div>
                        )}
                        {cert.skills && cert.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <Badge 
                                key={skill} 
                                variant="secondary"
                                className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 transition-all duration-300 hover:scale-105 group-hover:bg-primary/15"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <Button
                          variant="outline"
                          className="w-full bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg"
                          onClick={() => cert.url && window.open(cert.url, '_blank')}
                        >
                          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            View Certificate
                          </span>
                          <ExternalLink className="ml-2 h-4 w-4 text-primary" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
