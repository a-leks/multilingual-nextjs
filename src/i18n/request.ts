import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import fs from 'fs/promises';
import path from 'path';

// Define types for our messages
type Messages = Record<string, Record<string, string>>;

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as any)) {
    console.error(`Invalid locale: ${locale}`);
    notFound();
  }

  console.log(`Loading messages for locale: ${locale}`);

  try {
    const messages = await loadAllMessages(locale);
    console.log(`Successfully loaded messages for locale ${locale}`);
    console.log(`Merged messages:`, JSON.stringify(messages, null, 2));
    return { messages };
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
    if (error instanceof Error) {
      console.error(`Error details: ${error.message}`);
      console.error(`Error stack: ${error.stack}`);
    }
    notFound();
  }
});

async function loadAllMessages(locale: string): Promise<Messages> {
  const messagesDir = path.join(process.cwd(), 'messages');
  const messages: Messages = {};

  // Load global messages
  const globalMessages = await loadJsonFile(path.join(messagesDir, `global/${locale}.json`));
  Object.assign(messages, globalMessages);

  // Load page-specific messages
  const pagesDir = path.join(messagesDir, 'pages');
  const pageDirs = await fs.readdir(pagesDir).catch(() => []);
  for (const page of pageDirs) {
    const pageMessages = await loadJsonFile(path.join(pagesDir, `${page}/${locale}.json`));
    messages[page] = pageMessages;
  }

  // Load component messages
  const componentsDir = path.join(messagesDir, 'components');
  const componentDirs = await fs.readdir(componentsDir).catch(() => []);
  for (const component of componentDirs) {
    const componentMessages = await loadJsonFile(path.join(componentsDir, `${component}/${locale}.json`));
    messages[component] = componentMessages;
  }

  return messages;
}

async function loadJsonFile(filePath: string): Promise<Record<string, string>> {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.warn(`Could not load messages from ${filePath}:`, error instanceof Error ? error.message : String(error));
    return {};
  }
}